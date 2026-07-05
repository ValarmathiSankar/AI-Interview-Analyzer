import { Card, CardContent, Typography } from "@mui/material";

function ATSCard({ score }) {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h6">
          ATS Score
        </Typography>

        <Typography
          variant="h2"
          color="primary"
          align="center"
        >
          {score ?? 0}%
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ATSCard;