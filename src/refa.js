require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const orderToGPT = process.env.OPENAI_orderBlock;

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/annotate", async (req, res) => {
  const { code } = req.body;
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: orderToGPT,
              
          },
          { role: "user", content: code },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );
    //console.log(JSON.stringify(response.data, null, 2));

    const lastMessage = response.data.choices[0].message;
    const lastMessageContent = lastMessage ? lastMessage.content.trim() : "No response text provided.";
      
    //console.log(lastMessage);
    res.json({ commentedCode: lastMessageContent });
  } catch (error) {
    console.error("Error calling OpenAI:", error.response ? error.response.data : error.message);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

