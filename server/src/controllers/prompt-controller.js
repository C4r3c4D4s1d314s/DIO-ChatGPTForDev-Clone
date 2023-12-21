const inputPrompt = require("../models/input-prompt")
const openai = require("../config/openai")

module.exports = {
	async sendText(req, res) {
		const openaiAPI = openai.configuration();
		const inputModel = new inputPrompt(req.body);
	  
		try {
		  console.log('Received request:', inputModel);
	  
		  const response = await openaiAPI.createCompletion(
			openai.textCompletion(inputModel)
		  );
	  
		  console.log('Response sent:', response.data.choices[0].text);
	  
		  return res.status(200).json({
			success: true,
			data: response.data.choices[0].text,
		  });
		} catch (error) {
		  console.error('Error processing request:', error);
	  
		  return res.status(500).json({
			success: false,
			error: {
			  message: 'Internal server error',
			  details: error.response
				? error.response.data
				: 'There was an issue on the server',
			},
		  });
		}
	  }
}
