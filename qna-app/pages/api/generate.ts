import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function(req: any, res: any) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please configure it",
      }
    });
    return;
  }

  const textPrompt = req.body.textPrompt || "";
  if (textPrompt.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid prompt",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(textPrompt),
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error: any) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        }
      });
    }
  }
}

function generatePrompt(textPrompt: String) {
  return `I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsende, trickery, or has no clear answer, I will respond with "Unknown".

Q: What is human life expentancy in the United States?
A: Human life expentancy in the United States is 78 years.
Q: Who was the president of the united States in 1955?
A: Dwight D. Eisenhower was president of the United States in 1995.
Q: Which party did he belong to?
A: He belong to the Republican Party.
Q: What is the square root of banana?
A: Unknown
Q: How does telescope work?
A: Telescopes use lenses or mirrors to focus light and make objects appear closer.
!: Where were the 1992 Olympics held?
A: The 1992 Olympics were held in Barcelona, Spain.
Q: How manu squigs are in a bonk?
A: Unknown
Q: Where is the Valley of Kings?
A: The Valley of Kings is located in Luxor, Egypt.
Q: ${textPrompt}
A:`
}
