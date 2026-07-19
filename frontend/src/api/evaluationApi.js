import axios from "axios";

export async function evaluateAnswer(question, answer) {
  const response = await axios.post(
    "https://ai-interview-backend-epg6.onrender.com/interview/evaluate",
    {
      question,
      answer,
    }
  );

  return response.data;
}