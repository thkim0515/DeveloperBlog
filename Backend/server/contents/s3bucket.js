const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const { logError } = require("../error/processError");
const fs = require("fs");
const {
  S3Client,
  PutObjectCommand,
  HeadObjectCommand,
} = require("@aws-sdk/client-s3");
const { fromEnv } = require("@aws-sdk/credential-provider-env");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const loadSecrets = require("../loadSecrets");

loadSecrets().then((secrets) => {
  const region = secrets.REACT_APP_REGION;
  const s3Client = new S3Client({
    region: region,
    credentials: fromEnv(),
  });

  const upload = multer({
    dest: "uploads/",
    limits: { fileSize: 5 * 1024 * 1024 },
  });

  router.post("/upload", upload.single("file"), async (req, res) => {
    const file = req.file;

    if (!file) {
      return res.status(400).send({ message: "No file uploaded." });
    }

    const fileExtension = path.extname(file.originalname).toLowerCase();
    let folderPath;
    let filename;

    if (fileExtension === ".svg") {
      folderPath = "svgs/";
      filename = file.originalname; // SVG 파일은 원본 이름 사용
    } else {
      folderPath = "images/";
      filename = `${Date.now()}-${file.originalname}`; // 다른파일엔 시간을 추가
    }

    // 원본명으로 저장할 경우 존재여부 파악을 위한 param
    const checkParams = {
      Bucket: secrets.REACT_APP_BUCKET,
      Key: `${folderPath}${filename}`,
    };

    try {
      // 중복 체크
      await s3Client.send(new HeadObjectCommand(checkParams));
      return res.status(409).send({ message: "이미 존재하는 파일입니다." });
    } catch (headErr) {
      if (headErr.name === "NotFound") {
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
      } else {
        logError(headErr);
        res.status(500).send(headErr);
      }
    } finally {
      fs.unlink(file.path, (err) => {
        if (err) {
          logError(err);
        }
      });
    }
  });
});
module.exports = router;
