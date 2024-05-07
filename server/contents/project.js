const express = require("express");
const router = express.Router();
const { logError } = require("../error/processError");
const Project = require("../models/projectModel");
const Log = require("../models/LogModel");

//getproject.
router.get("/project", async (req, res) => {
  try {
    const project = await Project.aggregate([
      {
        $lookup: {
          from: "comments",
          localField: "_id",
          foreignField: "postId",
          as: "comments",
        },
      },
      {
        $addFields: {
          commentCount: { $size: "$comments" },
        },
      },
      {
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
        $sort: { pid: -1 },
      },
      {
        $unwind: {
          path: "$userId",
          preserveNullAndEmptyArrays: true,
        },
      },
    ]);

    res.json(project);
  } catch (error) {
    logError("프로젝트 파싱", error.message);
    res.status(500).json({ message: error.message });
  }
});

// C
router.post("/create", async (req, res) => {
  const {
    userId,
    title,
    startDate,
    endDate,
    updateDate,
    hashTags,
    stacks,
    roles,
    content,
    memberList,
    tableOfOrganization,
  } = req.body;
  try {
    const lastContent = await Project.findOne().sort({ pid: -1 });
    const pid = lastContent && lastContent.pid ? lastContent.pid + 1 : 1;
    const newContents = new Project({
      userId,
      pid,
      title,
      startDate,
      endDate,
      updateDate,
      hashTags,
      stacks,
      roles,
      content,
      memberList,
      tableOfOrganization,
    });
    await newContents.save();

    const newContentInfo = await Project.findOne({ pid: newContents.pid });
    res
      .status(201)
      .json({ message: "프로젝트 모집 등록 성공", info: newContentInfo });
  } catch (error) {
    logError("프로젝트 생성", error.message);
    res.status(500).json({ message: "서버 에러" });
  }
});

// R
router.get("/read/:_id", async (req, res) => {
  try {
    const project = await Project.findOne({ _id: req.params._id })
      .populate("userId", "nickname profileimg")
      .exec();
    if (!project) {
      return res.status(404).json({ message: "프로젝트없음" });
    }
    res.status(200).json(project);
  } catch (error) {
    logError("프로젝트 읽기", error.message);
    res.status(500).json({ message: "서버 에러" });
  }
});

// U
router.put("/update/:_id", async (req, res) => {
  try {
    const updateProject = await Project.findOneAndUpdate(
      { _id: req.params._id },
      req.body,
      { new: true }
    );

    if (!updateProject) {
      return res.status(404).json({ message: "프로젝트없음" });
    }
    res.status(200).json({ message: "수정성공", updateProject });
  } catch (error) {
    logError("프로젝트 업데이트", error.message);
    res.status(500).json({ message: "서버 에러" });
  }
});

// D
router.delete("/delete/:_id", async (req, res) => {
  try {
    const deletedProject = await Project.findOneAndDelete({
      _id: req.params._id,
    });
    if (!deletedProject) {
      return res.status(404).json({ message: "프로젝트없음" });
    }

    // 프로젝트가 삭제될 경우 가지고있는 코멘트도 전부
    const deletedComments = await Comment.deleteMany({
      postId: req.params._id,
    });

    res.status(200).json({
      message: "삭제성공",
      deletedContentInfo: deletedProject,
      deletedCommentsCount: deletedComments.deletedCount,
    });
  } catch (error) {
    logError("프로젝트 삭제", error.message);
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
    const project = await Project.findOneAndUpdate(
      { _id: _id },
      { $inc: { views: 1 } },
      { new: true }
    );
    if (!project) {
      return res.status(404).send("프로젝트 없음");
    }

    await new Log({ contentId: _id, ip: ip }).save();
    res.status(200).json(project);
  } catch (error) {
    logError("프로젝트 뷰", error.message);
    res.status(500).json({ message: "서버 에러" });
  }
});

// 좋아요
router.post("/like", async (req, res) => {
  const { content_id, user_id } = req.body;
  try {
    const project = await Project.findOne({ _id: content_id });
    if (!project) {
      return res.status(404).json({ message: "프로젝트 없음" });
    }

    const index = project.likeUser.indexOf(user_id);
    if (index === -1) {
      // 좋아요 추가
      project.likes += 1;
      project.likeUser.push(user_id);
    } else {
      // 좋아요 취소
      project.likes -= 1;
      project.likeUser.splice(index, 1);
    }

    await project.save();
    res.status(200).json(project);
  } catch (error) {
    logError("프로젝트 좋아요", error.message);
    res.status(500).json({ message: "서버 에러", error: error.message });
  }
});

module.exports = router;
