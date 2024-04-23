// AWS SDK 및 시크릿 매니저 코드
const AWS = require("aws-sdk");
const region = "ap-northeast-2";
const secretName = "starblog";

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

AWS.config.update({
  region: region,
});
const client = new AWS.SecretsManager();

const loadSecrets = () => {
  return new Promise((resolve, reject) => {
    client.getSecretValue({ SecretId: secretName }, (err, data) => {
      if (err) {
        console.error("에러: ", err);
        reject(err);
      } else if ("SecretString" in data) {
        const secrets = JSON.parse(data.SecretString);
        resolve(secrets);
      } else {
        reject(new Error("시크릿팅이 존재 하지 않음"));
      }
    });
  });
};

module.exports = loadSecrets;
