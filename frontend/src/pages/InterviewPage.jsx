import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { InterviewContext } from "../context/InterviewContext";
import { Container, Grid, Typography } from "@mui/material";

import QuestionPanel from "../components/interview/QuestionPanel";
import Timer from "../components/interview/Timer";
import TranscriptBox from "../components/interview/TranscriptBox";
import ControlButtons from "../components/interview/ControlButtons";
import ProgressCard from "../components/interview/ProgressCard";
import { evaluateAnswer } from "../api/evaluationApi";

function InterviewPage() {
    const {
        questions,
        currentQuestion,
        setCurrentQuestion,

        transcript,
        setTranscript,

        answers,
        setAnswers,

        evaluations,
        setEvaluations,
        
    } = useContext(InterviewContext); 

    console.log("Evaluations:", evaluations);

    const nextQuestion = async () => {

      if (!transcript.trim()) {
        alert("Please record your answer first.");
        return;
      }

      const question = questions[currentQuestion];

      setAnswers((prev) => [
        ...prev,
        {
            question,
            answer: transcript,
        },
      ]);

      try {

        const result = await evaluateAnswer(
          question,
          transcript
        );

        console.log(result);

        setEvaluations((prev) => [
            ...prev,
            {
              question,
              answer: transcript,
              ...result,
            },
        ]);

      } catch (err) {

        console.error(err);

      }

      setTranscript("");

      if (currentQuestion < questions.length - 1) {

        setCurrentQuestion((prev) => prev + 1);

      } else {
        navigate("/reports");
      }
    };

    const previousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const navigate = useNavigate();

  return (

    <Container maxWidth="lg">

      <Typography
        variant="h4"
        gutterBottom
      >

        Mock Interview

      </Typography>

      <Grid container spacing={3}>

        <Grid size={{ xs: 12 }}>

          <ProgressCard 
            currentQuestion={currentQuestion} 
            totalQuestions={questions.length}
          />

        </Grid>

        <Grid size={{ xs: 12 }}>

          <QuestionPanel question={questions[currentQuestion]} />

        </Grid>

        <Grid size={{ xs: 12 }}>

          <Timer />

        </Grid>

        <Grid size={{ xs: 12 }}>

          <TranscriptBox />

        </Grid>

        <Grid size={{ xs: 12 }}>

          <ControlButtons 
            onPrevious={previousQuestion}
            onNext={nextQuestion}
            disablePrevious={currentQuestion === 0}
            disableNext={currentQuestion === questions.length - 1}
          />

        </Grid>

      </Grid>

    </Container>

  );

}

export default InterviewPage;