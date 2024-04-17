const fs = require("fs");
const dotenv = require("dotenv");
const crypto = require("crypto");

const envPath = "./.env";
const envConfig = dotenv.parse(fs.readFileSync(envPath));

function generateSecret() {
  return crypto.randomBytes(36).toString("hex");
}

const updateSecret = () => {
  envConfig.REACT_APP_SECURECODE = generateSecret();

  const updatedEnv = Object.keys(envConfig)
    .map((key) => `${key}=${envConfig[key]}`)
    .join("\n");
  fs.writeFileSync(envPath, updatedEnv);

  console.log(`secret update: ${envConfig.REACT_APP_SECURECODE}`);
};

setInterval(updateSecret, 24 * 60 * 60 * 1000);
