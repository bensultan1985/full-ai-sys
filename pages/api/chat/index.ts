// import { Axios } from "axios";
import OpenAI from "openai";
import type { NextApiRequest, NextApiResponse } from "next";

const openAiKey = process.env.REACT_APP_OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: openAiKey,
  project: "proj_eJikDeOcWNVZG0LlLVVJN6Xa",
});

type ResponseData = {
  status?: number;
  data?: any;
  msg?: string;
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const data = getResponse(req, res, req.query.prompt as string);
  } else {
    return res.status(500);
  }
};

export const getResponse = async (
  req: NextApiRequest,
  res: NextApiResponse,
  prompt: string
) => {
  const data = await genAiComm(prompt);
  return res.status(200).json({ status: 200, data: data, msg: "" });
};

export const genAiComm = async (prompt: string) => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: prompt }],
    model: "gpt-4o",
  });
  return completion.choices[0].message.content;
};
