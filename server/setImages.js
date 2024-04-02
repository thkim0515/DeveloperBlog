const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/img"));
  },
  filename: function (req, file, cb) {
    const timeStamp = new Date().getTime();
    const extension = path.extname(file.originalname);
    cb(null, `${timeStamp}${extension}`);
  },
});

const upload = multer({ storage: storage });

router.post("/upload", upload.single("image"), (req, res) => {
  if (req.file) {
    const filePath = `/img/${req.file.filename}`;
    res.json({ filePath: filePath, fileName: req.file.filename });
  } else {
    res.status(400).send("이미지 업로드 실패");
  }
});

module.exports = router;
