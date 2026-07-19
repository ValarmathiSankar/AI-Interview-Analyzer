import axios from "axios";

export async function evaluateAnswer(question, answer) {
  const response = await axios.post(
    "http://127.0.0.1:8000/interview/evaluate",
    {
      question,
      answer,
    }
  );

  return response.data;
}