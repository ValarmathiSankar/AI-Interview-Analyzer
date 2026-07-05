import API from "../api/interviewApi";

export const uploadResume = async (file) => {
  const formData = new FormData();

  formData.append("file", file);

  const response = await API.post("/resume/upload", formData);

  return response.data;
};

export const generateQuestions = async (skills) => {
  const response = await API.post("/interview/questions", {
    skills,
  });

  return response.data;
};