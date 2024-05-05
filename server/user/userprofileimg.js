const express = require("express");
const router = express.Router();
const multer = require("multer");
const { logError } = require("../error/processError");
const fs = require("fs");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { fromEnv } = require("@aws-sdk/credential-provider-env");

const region = "ap-northeast-2";
const s3Client = new S3Client({
  region: region,
  credentials: fromEnv(),
});

const upload = multer({
  dest: "profileImg/",
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.post("/userprofileimg", upload.single("file"), async (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send({ message: "No file uploaded." });
  }

  const folderPath = "profileImg/";
  const filename = `${Date.now()}-${file.originalname}`;

  const checkParams = {
    Bucket: "starblog-bucket",
    Key: `${folderPath}${filename}`,
  };

  try {
    // 파일이 없으면 업로드 진행
    const uploadParams = {
      Bucket: checkParams.Bucket,
      Key: checkParams.Key,
      Body: fs.createReadStream(file.path),
      ContentType: file.mimetype,
      ACL: "public-read",
    };
    try {
      const command = new PutObjectCommand(uploadParams);
      const data = await s3Client.send(command);
      res.status(200).send({
        message: "업로드 성공",
        location: data.Location,
        filename: filename,
      });
    } catch (err) {
      logError(err);
      res.status(500).send(err);
    }
  } catch (headErr) {
    logError(headErr);
  } finally {
    fs.unlink(file.path, (err) => {
      if (err) {
        logError(err);
      }
    });
  }
});

module.exports = router;
