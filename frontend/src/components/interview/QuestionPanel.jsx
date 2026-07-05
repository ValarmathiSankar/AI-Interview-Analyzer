import { Card, CardContent, Typography } from "@mui/material";

function QuestionPanel({ question }) {
  return (
    <Card>
      <CardContent>

        <Typography variant="h6">
          Current Question
        </Typography>

        <Typography sx={{ mt: 2 }}>
          {question || "Generate interview questions first."}
        </Typography>

      </CardContent>
    </Card>
  );
}

export default QuestionPanel;