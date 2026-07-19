import axios from "axios";

const API_URL = "https://ai-interview-backend-epg6.onrender.com/speech";

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