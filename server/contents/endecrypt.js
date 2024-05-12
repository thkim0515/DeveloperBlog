const express = require("express");
const router = express.Router();
const CryptoJS = require("crypto-js");
const loadSecrets = require("../loadSecrets");
const { logError } = require("../error/processError");

router.post("/encrypt", async (req, res) => {
  const data = req.body;
  const secrets = await loadSecrets();
  const SECURECODE = secrets.REACT_APP_SECURECODE;

  try {
    if (data) {
      const encryptedData = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        SECURECODE
      ).toString();

      res.json({ encryptedData });
    } else {
      res.status(400).send("No data provided");
    }
  } catch (error) {
    logError("암호화", error.message);
    res.status(400).send("No data provided");
  }
});

router.post("/decrypt", async (req, res) => {
  const { data } = req.body;
  const secrets = await loadSecrets();
  const SECURECODE = secrets.REACT_APP_SECURECODE;
  try {
    if (data) {
      const bytes = CryptoJS.AES.decrypt(data, SECURECODE);
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      res.json({ decryptedData });
    } else {
      res.status(400).send("No encrypted data provided");
    }
  } catch (error) {
    logError("복호화", error.message);
    res.status(400).send("No data provided");
  }
});

module.exports = router;
