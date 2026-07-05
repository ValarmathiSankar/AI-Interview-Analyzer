import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
} from "@mui/material";

function ProgressCard({
  currentQuestion,
  totalQuestions,
}) {

  const progress =
    totalQuestions === 0
      ? 0
      : ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <Card>
      <CardContent>

        <Typography gutterBottom>
          Question {currentQuestion + 1} of {totalQuestions}
        </Typography>

        <LinearProgress
          variant="determinate"
          value={progress}
        />

      </CardContent>
    </Card>
  );
}

export default ProgressCard;