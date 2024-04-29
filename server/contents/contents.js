const express = require("express");
const router = express.Router();
const Content = require("../models/contentModel");
const svgsData = require("../models/svgModel");
const Comment = require("../models/commentModel");
const User = require("../models/userModel");
const { logError } = require("../error/processError");
const loadSecrets = require("../loadSecrets");
const Log = require("../models/LogModel");
const axios = require("axios");

//getcontents.
router.get("/contents", async (req, res) => {
  try {
    // throw new Error("테스트 에러발생");
    const contentst = await Content.aggregate([
      {
        // 외래키 참조로 comment.postId === content._id
        $lookup: {
          from: "comments",
          localField: "_id",
          foreignField: "postId",
          as: "comments",
        },
      },
      {
        // 댓글 갯수 카운트
        $addFields: {
          commentCount: { $size: "$comments" },
        },
      },
      {
        // 외래키 참조 content.userId === users_id 에서 _id 제외 ,nickname,profileimg만 추출
        $lookup: {
          from: "users",
          let: { userId: "$userId" },
          pipeline: [
            { $match: { $expr: { $eq: ["$_id", "$$userId"] } } },
            { $project: { _id: 1, nickname: 1, profileimg: 1 } },
          ],
          as: "userId",
        },
      },
      {
        $unwind: {
          path: "$userId",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        // 데이터 참조 테스트용
        $sort: { pid: -1 },
      },
      {
        $project: {
          //comment: 0,
          userId: 1,
          pid: 1,
          title: 1,
          nickname: 1,
          profileImg: 1,
          imagePath: 1,
          language: 1,
          publicPrivate: 1,
          // ace_contents: { $substrCP: ["$ace_contents", 0, 10] },
          // toast_contents: { $substrCP: ["$toast_contents", 0, 10] },
          postdate: 1,
          views: 1,
          likes: 1,
          likeUser: 1,
          commentCount: 1,
        },
      },
    ]);

    res.json(contentst);
  } catch (error) {
    logError("콘텐츠 파싱", error.message);
    res.status(500).json({ message: error.message });
  }
});

//svgs
router.get("/svgsdata", async (req, res) => {
  try {
    const svgsdata = await svgsData.find();
    res.json(svgsdata);
  } catch (error) {
    logError("SVG파싱", error.message);
    res.status(500).json({ message: error.message });
  }
});

router.post("/annotate", async (req, res) => {
  try {
    const secrets = await loadSecrets();
    const OPENAI_API_KEY = secrets.REACT_APP_OPENAI_API_KEY;
    const orderToGPT = secrets.REACT_APP_OPENAI_orderBlock;
    const code = req.body.code;

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: orderToGPT },
          { role: "user", content: code },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );
    const lastMessage = response.data.choices[0].message;
    const lastMessageContent = lastMessage
      ? lastMessage.content.trim()
      : "반환 텍스트가 없음";
    const replaceAllBackticks = lastMessageContent.replaceAll("```", "");

    res.json({ commentedCode: replaceAllBackticks });
  } catch (error) {
    console.error(
      "OpenAI 에러",
      error.response ? error.response.data : error.message
    );
    res.status(500).send("서버 에러");
  }
});

// C
router.post("/create", async (req, res) => {
  const {
    userId,
    title,
    language,
    publicPrivate,
    imagePath,
    ace_contents,
    toast_contents,
  } = req.body;
  try {
    const lastContent = await Content.findOne().sort({ pid: -1 });
    const pid = lastContent && lastContent.pid ? lastContent.pid + 1 : 1;
    const newContents = new Content({
      userId,
      pid,
      title,
      language,
      publicPrivate,
      imagePath,
      ace_contents,
      toast_contents,
    });
    await newContents.save();

    const newContentInfo = await Content.findOne({ pid: newContents.pid });
    res.status(201).json({ message: "글 등록 성공", info: newContentInfo });
  } catch (error) {
    logError("콘텐츠 생성", error.message);
    res.status(500).json({ message: "서버 에러" });
  }
});

// All R
/*
최초 렌더링 할 때 사용할지 고민중...

router.get("/read", async (req, res) => {
  try {
    const contents = await Content.find();
    res.status(200).json(contents);
  } catch (error) {
    res.status(500).json({ message: "서버 에러" });
  }
});
*/

// R
router.get("/read/:_id", async (req, res) => {
  try {
    const content = await Content.findOne({ _id: req.params._id })
      .populate("userId", "nickname profileimg")
      .exec();
    if (!content) {
      return res.status(404).json({ message: "콘텐츠없음" });
    }
    res.status(200).json(content);
  } catch (error) {
    logError("콘텐츠 읽기", error.message);
    res.status(500).json({ message: "서버 에러" });
  }
});

// U
router.put("/update/:_id", async (req, res) => {
  try {
    const updatedContent = await Content.findOneAndUpdate(
      { _id: req.params._id },
      req.body,
      { new: true }
    );

    if (!updatedContent) {
      return res.status(404).json({ message: "콘텐츠없음" });
    }
    res.status(200).json({ message: "수정성공", updatedContent });
  } catch (error) {
    logError("콘텐츠 업데이트", error.message);
    res.status(500).json({ message: "서버 에러" });
  }
});

// D
router.delete("/delete/:_id", async (req, res) => {
  try {
    const deletedContent = await Content.findOneAndDelete({
      _id: req.params._id,
    });
    if (!deletedContent) {
      return res.status(404).json({ message: "콘텐츠없음" });
    }

    // 콘텐츠가 삭제될 경우 가지고있는 코멘트도 전부
    const deletedComments = await Comment.deleteMany({
      postId: req.params._id,
    });

    res.status(200).json({
      message: "삭제성공",
      deletedContentInfo: deletedContent,
      deletedCommentsCount: deletedComments.deletedCount,
    });
  } catch (error) {
    logError("콘텐츠 삭제", error.message);
    res.status(500).json({ message: "서버 에러" });
  }
});

// 조회수
router.post("/view", async (req, res) => {
  const { _id } = req.body;
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const isAlreadyViewed = await Log.findOne({ contentId: _id, ip: ip });
  if (isAlreadyViewed) {
    return res.status(200).json({ message: "24시간 뒤 조회수 재적용" });
  }

  try {
    const content = await Content.findOneAndUpdate(
      { _id: _id },
      { $inc: { views: 1 } },
      { new: true }
    );
    if (!content) {
      return res.status(404).send("콘텐츠 없음");
    }

    await new Log({ contentId: _id, ip: ip }).save();
    res.status(200).json(content);
  } catch (error) {
    logError("콘텐츠 뷰", error.message);
    res.status(500).json({ message: "서버 에러" });
  }
});

// 좋아요
router.post("/like", async (req, res) => {
  const { content_id, user_id } = req.body;

  try {
    const content = await Content.findOne({ _id: content_id });
    if (!content) {
      return res.status(404).json({ message: "콘텐츠 없음" });
    }

    const index = content.likeUser.indexOf(user_id);
    if (index === -1) {
      // 좋아요 추가
      content.likes += 1;
      content.likeUser.push(user_id);
    } else {
      // 좋아요 취소
      content.likes -= 1;
      content.likeUser.splice(index, 1);
    }

    await content.save();
    res.status(200).json(content);
  } catch (error) {
    logError("콘텐츠 좋아요", error.message);
    res.status(500).json({ message: "서버 에러", error: error.message });
  }
});

module.exports = router;
