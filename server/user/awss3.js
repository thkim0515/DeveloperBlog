const express = require("express");
const router = express.Router();
const multer = require("multer");
const { logError } = require("../error/processError");
const fs = require("fs");
const {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} = require("@aws-sdk/client-s3");
const { fromEnv } = require("@aws-sdk/credential-provider-env");
const loadSecrets = require("../loadSecrets");

loadSecrets().then((secrets) => {
  const region = secrets.REACT_APP_REGION;
  const bucket = secrets.REACT_APP_BUCKET;
  const folderPath = "tempImg/";
  const s3Client = new S3Client({
    region: region,
    credentials: fromEnv(),
  });

  const upload = multer({
    dest: folderPath,
    limits: { fileSize: 5 * 1024 * 1024 },
  });

  router.post("/uploadimage", upload.single("file"), async (req, res) => {
    const file = req.file;
    const folderPath = req.body.path;
    file.originalname = Buffer.from(file.originalname, "ascii").toString(
      "utf8"
    );

    if (!file) {
      return res.status(400).send({ message: "No file uploaded." });
    }

    const filename =
      file.originalname === "noprofile.jpg"
        ? file.originalname
        : `${Date.now()}-${file.originalname}`;

    // const filename = `${Date.now()}-${file.originalname}`;
    const checkParams = {
      Bucket: bucket,
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

  router.delete("/deleteimg/:profileimg", async (req, res) => {
    const { profileimg } = req.params;

    if (profileimg && profileimg !== "noprofile.jpg") {
      const filePath = `profileImg/${profileimg}`;
      const deleteParams = {
        Bucket: bucket,
        Key: filePath,
      };

      try {
        const command = new DeleteObjectCommand(deleteParams);
        await s3Client.send(command);
        res.status(200).send({
          message: "이미지 삭제 성공",
          filename: profileimg,
        });
      } catch (err) {
        logError(err);
        res.status(500).send(err);
      }
    }
  });

  router.get("/getbucket", async (req, res) => {
    try {
      const secrets = await loadSecrets();
      res.json({ bucketUrl: secrets.REACT_APP_BUCKETNAME });
    } catch (error) {
      logError(error);
      res.status(500).json({ error: "서버 에러 발생" });
    }
  });
});
module.exports = router;
