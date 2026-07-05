import { useContext } from "react";
import { InterviewContext } from "../context/InterviewContext";
import { Container, Grid, Typography } from "@mui/material";

import QuestionPanel from "../components/interview/QuestionPanel";
import Timer from "../components/interview/Timer";
import TranscriptBox from "../components/interview/TranscriptBox";
import ControlButtons from "../components/interview/ControlButtons";
import ProgressCard from "../components/interview/ProgressCard";

function InterviewPage() {
    const {
        questions,
        currentQuestion,
        setCurrentQuestion,
    } = useContext(InterviewContext); 

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const previousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

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