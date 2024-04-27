const express = require("express");
const router = express.Router();
const CryptoJS = require("crypto-js");
const loadSecrets = require("../loadSecrets");

router.post("/encrypt", async (req, res) => {
  const data = req.body;
  const secrets = await loadSecrets();
  const SECURECODE = secrets.REACT_APP_SECURECODE;

  if (data) {
    const encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      SECURECODE
    ).toString();

    res.json({ encryptedData });
  } else {
    res.status(400).send("No data provided");
  }
});

router.post("/decrypt", async (req, res) => {
  const { data } = req.body;
  console.log(data.length);
  const secrets = await loadSecrets();
  const SECURECODE = secrets.REACT_APP_SECURECODE;
  if (data) {
    const bytes = CryptoJS.AES.decrypt(data, SECURECODE);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    // console.log(decryptedData.length);
    res.json({ decryptedData });
  } else {
    res.status(400).send("No encrypted data provided");
  }
});

module.exports = router;
