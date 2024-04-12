const express = require("express");
const router = express.Router();
const Content = require("../models/contentModel");
const svgsData = require("../models/svgModel");
const Comment = require("../models/commentModel");
const User = require("../models/userModel");

//images
router.get("/contents", async (req, res) => {
  try {
    const contentsWithCommentCounts = await Content.aggregate([
      {
        $lookup: {
          from: "comments", // 'comments' 컬렉션을 참조
          localField: "_id", // Content 모델의 '_id' 필드
          foreignField: "postId", // Comment 모델의 'postId' 필드
          as: "comments", // 결과를 'comments'라는 배열로 저장
        },
      },
      {
        $addFields: {
          commentCount: { $size: "$comments" }, // 'comments' 배열의 크기를 계산
        },
      },
      {
        $project: {
          comments: 0, // 최종 결과에서 'comments' 배열 제외
          // 필요한 필드를 추가하여 결과 조정 가능
        },
      },
    ]);
    res.json(contentsWithCommentCounts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//svgs
router.get("/svgsdata", async (req, res) => {
  try {
    const svgsdata = await svgsData.find();
    res.json(svgsdata);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// C
router.post("/create", async (req, res) => {
  const {
    userId,
    title,
    nickname,
    language,
    publicPrivate,
    imagePath,
    profileImg,
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
      nickname,
      language,
      publicPrivate,
      imagePath,
      profileImg,
      ace_contents,
      toast_contents,
    });
    console.log(newContents);
    await newContents.save();
    res.status(201).json({ message: "글 등록 성공", pid: newContents.pid });
  } catch (error) {
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
    console.log(content);
    if (!content) {
      return res.status(404).json({ message: "콘텐츠없음" });
    }
    res.status(200).json(content);
  } catch (error) {
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
    res.status(500).json({ message: "서버 에러" });
  }
});

// 조회수
router.post("/view", async (req, res) => {
  const { _id } = req.body;
  try {
    const content = await Content.findOneAndUpdate(
      { _id: _id },
      { $inc: { views: 1 } },
      { new: true }
    );

    if (!content) {
      return res.status(404).send("콘텐츠 없음");
    }

    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ message: "서버 에러" });
  }
});

// 좋아요
router.post("/like", async (req, res) => {
  const { contents_id, user_id } = req.body;

  try {
    const content = await Content.findOne({ _id: contents_id });

    if (!content) {
      return res.status(404).json({ message: "콘텐츠 없음" });
    }

    if (content.likeUser.includes(user_id)) {
      return res.status(400).json({ message: "이미 좋아요를 누른 게시글" });
    }

    content.likes += 1;
    content.likeUser.push(user_id);
    await content.save();

    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ message: "서버 에러" });
  }
});

module.exports = router;
