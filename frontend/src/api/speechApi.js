import axios from "axios";

const API_URL = "http://127.0.0.1:8000/speech";

export const transcribeAudio = async (audioBlob) => {
  const formData = new FormData();

  formData.append("file", audioBlob, "recording.webm");

  const response = await axios.post(
    `${API_URL}/transcribe`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};