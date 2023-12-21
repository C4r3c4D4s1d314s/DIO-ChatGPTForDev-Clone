import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [
    {
      "role": "user",
      "content": "hello!"
    },
    {
      "role": "assistant",
      "content": "Hello! How can I assist you today?"
    }
  ],
  temperature: 1,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});











// const { Configuration, OpenAIApi } = require("openai")
// require("dotenv").config()

// module.exports = class openai{

// 	static configuration(){
// 		const configuration = new Configuration({
// 			apiKey: process.env.OPEN_AI_KEY,
// 		});

// 		return new OpenAIApi(configuration)
// 	}

// 	static textCompletion ({prompt}) {
//     return 	{
// 			model:"text-davinci-003",
// 			prompt:`${prompt}`,
// 			temperature:0,
// 			max_tokens: 3500,
// 			top_p:1,
// 			frequency_penalty: 0.5,
// 			presence_penalty: 0
// 		}
//   }
// }
