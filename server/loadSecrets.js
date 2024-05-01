const {
  SecretsManagerClient,
  GetSecretValueCommand,
} = require("@aws-sdk/client-secrets-manager");
const region = "ap-northeast-2";
const secretName = "starblog";

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const KEYID = process.env.REACT_APP_A;
const KEYPWD = process.env.REACT_APP_B;

const client = new SecretsManagerClient({
  region: region,
  credentials: {
    accessKeyId: KEYID,
    secretAccessKey: KEYPWD,
  },
});

const loadSecrets = async () => {
  const command = new GetSecretValueCommand({ SecretId: secretName });
  try {
    const data = await client.send(command);
    if ("SecretString" in data) {
      const secrets = JSON.parse(data.SecretString);
      return secrets;
    } else {
      throw new Error("시크릿팅이 존재 하지 않음");
    }
  } catch (err) {
    console.error("에러: ", err);
    throw err;
  }
};

module.exports = loadSecrets;
