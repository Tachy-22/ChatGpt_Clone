require("dotenv").config();
console.log(process.env);

const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 5000;
const OpenAiApiKey = process.env.REACT_APP_API_KEY;

const configuration = new Configuration({
  organization: "org-C7KYxFBBxZeRqXqJA3YWBMLx",
  apiKey: OpenAiApiKey,
});
const openai = new OpenAIApi(configuration);

app.post("/", async (req, res) => {
  const { message, currentModel } = req.body;
  const completion = await openai.createChatCompletion({
    model: `${currentModel}`,
    messages: [
      { role: "system", content: "you are a helpful assistant" },
      { role: "system", content: `${message}` },
    ],
    max_tokens: 1500,
    temperature: 1,
  });
  res.json({
    gptResponse: completion.data.choices[0].message.content,
  });
});

app.get("/models", async (req, res) => {
  const response = await openai.listEngines();
  console.log(response);
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow requests from all origins
  res.json({
    models: [
      { id: "gpt-3.5-turbo", name: "Gpt-bro" },
      { id: "gpt-3.5-turbo", name: "Gpt-mega" },
      { id: "gpt-3.5-turbo", name: "Gpt-bazuka" },
    ],
  });
});

app.listen(port, () => {
  console.log(` app listening`);
});
