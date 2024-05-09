const express = require("express");
const router = express.Router();
const Content = require("../models/contentModel");
const Project = require("../models/projectModel");
const { logError } = require("../error/processError");

// getContentsAndProjects
router.get("/data", async (req, res) => {
  try {
    const CodeData = Content.aggregate([
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
        $unwind: {
          path: "$userId",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $sort: { pid: -1 },
      },
      {
        $project: {
          userId: 1,
          pid: 1,
          title: 1,
          nickname: 1,
          profileImg: 1,
          imagePath: 1,
          language: 1,
          publicPrivate: 1,
          postdate: 1,
          views: 1,
          likes: 1,
          likeUser: 1,
          commentCount: 1,
        },
      },
      {
        $limit: 6, // 최대 6개의 결과 반환
      },
    ]);

    const projectData = Project.aggregate([
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
      {
        $limit: 3, // 최대 3개의 결과 반환
      },
    ]);

    const [codes, projects] = await Promise.all([CodeData, projectData]);

    res.json({ codes, projects });
  } catch (error) {
    logError("코드와 프로젝트 파싱", error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
