import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { InterviewContext } from "../context/InterviewContext";
import { Container, Grid } from "@mui/material";

import UploadCard from "../components/cards/UploadCard";
import ATSCard from "../components/cards/ATSCard";
import SkillsCard from "../components/cards/SkillsCard";
import FeedbackCard from "../components/cards/FeedbackCard";
import QuestionCard from "../components/cards/QuestionCard";

import {
  uploadResume,
  generateQuestions,
} from "../services/resumeService";

function Dashboard() {
  const [file, setFile] = useState(null);
  const {
    analysis,
    setAnalysis,
    questions,
    setQuestions,
  } = useContext(InterviewContext);
  const navigate = useNavigate();

  const handleUpload = async () => {
    if (!file) return;

    try {
      const data = await uploadResume(file);
      setAnalysis(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleGenerateQuestions = async () => {
    if (!analysis) return;

    try {
      const response = await generateQuestions(analysis.skills);
      setQuestions(response.questions);
    } catch (err) {
      console.error(err);
    }
  };

  const startInterview = () => {
      navigate("/interview");
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>

        <Grid size={{ xs: 12 }}>
          <UploadCard
            file={file}
            setFile={setFile}
            handleUpload={handleUpload}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <ATSCard score={analysis?.ats_score} />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <SkillsCard skills={analysis?.skills || []} />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <FeedbackCard
            suggestions={analysis?.suggestions || []}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <QuestionCard
            questions={questions}
            onGenerate={handleGenerateQuestions}
            onStartInterview={startInterview}
          />
        </Grid>

      </Grid>
    </Container>
  );
}

export default Dashboard;