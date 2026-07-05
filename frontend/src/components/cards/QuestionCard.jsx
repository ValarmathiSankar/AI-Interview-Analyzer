import {
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  Stack,
} from "@mui/material";

function QuestionCard({
  questions,
  onGenerate,
  onStartInterview,
}) {
  return (
    <Card elevation={3}>
      <CardContent>

        <Typography variant="h6" gutterBottom>
          AI Interview Questions
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>

          <Button
            variant="contained"
            onClick={onGenerate}
          >
            Generate Questions
          </Button>

          <Button
            variant="contained"
            color="success"
            onClick={onStartInterview}
            disabled={questions.length === 0}
          >
            Start Interview
          </Button>

        </Stack>

        <List>
          {questions.map((question, index) => (
            <ListItem key={index}>
              {index + 1}. {question}
            </ListItem>
          ))}
        </List>

      </CardContent>
    </Card>
  );
}

export default QuestionCard;