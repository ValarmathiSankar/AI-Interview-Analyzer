import { useContext } from "react";
import { InterviewContext } from "../context/InterviewContext";
import { generatePDF } from "../utils/pdfGenerator";

import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Divider,
  Button,
} from "@mui/material";

function ReportPage() {

  const { evaluations } = useContext(InterviewContext);

  const average =
    evaluations.length === 0
      ? 0
      : Math.round(
          evaluations.reduce(
            (sum, item) => sum + item.overall_score,
            0
          ) / evaluations.length
        );

  return (
    <Container maxWidth="lg">

      <Typography
        variant="h4"
        align="center"
        gutterBottom
      >
        AI Interview Report
      </Typography>

      <Typography
        variant="h2"
        align="center"
        color="primary"
        sx={{ mb: 5 }}
      >
        {average}/10
      </Typography>
      <Button
        variant="contained"
        color="success"
        onClick={() => generatePDF(evaluations)}
        sx={{
          display: "block",
          mx: "auto",
          mb: 4,
        }}
      >
        Download PDF
      </Button>

      <Grid container spacing={3} sx={{ mb: 5 }}>

        <Grid size={{ xs:12, md:4 }}>

          <Card>

            <CardContent>

              <Typography variant="h6">
                Technical
              </Typography>

              <Typography variant="h4">
                {average}/10
              </Typography>

            </CardContent>

          </Card>

        </Grid>

        <Grid size={{ xs:12, md:4 }}>

          <Card>

            <CardContent>

              <Typography variant="h6">
                Communication
              </Typography>

              <Typography variant="h4">
                {average}/10
              </Typography>

            </CardContent>

          </Card>

        </Grid>

        <Grid size={{ xs:12, md:4 }}>

          <Card>

            <CardContent>

              <Typography variant="h6">
                Questions Answered
              </Typography>

              <Typography variant="h4">
                {evaluations.length}
              </Typography>

            </CardContent>

          </Card>

        </Grid>

      </Grid>

      {evaluations.map((item, index) => (

        <Card key={index} sx={{ mb:4 }}>

          <CardContent>

            <Typography variant="h5">
              Question {index+1}
            </Typography>

            <Divider sx={{ my:2 }} />

            <Typography>
              <b>Question:</b>
            </Typography>

            <Typography sx={{ mb:2 }}>
              {item.question}
            </Typography>

            <Typography>
              <b>Your Answer:</b>
            </Typography>

            <Typography sx={{ mb:2 }}>
              {item.answer}
            </Typography>

            <Typography sx={{ mb:1 }}>
              Technical Score
            </Typography>

            <LinearProgress
              variant="determinate"
              value={item.technical_score*10}
            />

            <Typography sx={{ mt:2, mb:1 }}>
              Communication Score
            </Typography>

            <LinearProgress
              variant="determinate"
              value={item.communication_score*10}
            />

            <Typography
              variant="h6"
              sx={{ mt:3 }}
            >
              Overall Score :
              {item.overall_score}/10
            </Typography>

            <Typography sx={{ mt:3 }}>
              <b>AI Feedback</b>
            </Typography>

            <Typography>
              {item.feedback}
            </Typography>

          </CardContent>

        </Card>

      ))}

    </Container>
  );

}

export default ReportPage;