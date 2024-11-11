const {
  SecretsManagerClient,
  GetSecretValueCommand,
} = require("@aws-sdk/client-secrets-manager");
const secretName = "starblog";
const region = "ap-northeast-2";

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const { logError } = require("./error/processError");

const client = new SecretsManagerClient({
  region: region,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
    logError(err);
    throw err;
  }
};

module.exports = loadSecrets;
