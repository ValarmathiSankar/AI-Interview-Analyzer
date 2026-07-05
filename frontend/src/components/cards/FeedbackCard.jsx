import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
} from "@mui/material";

function FeedbackCard({ suggestions }) {
  return (
    <Card elevation={3}>
      <CardContent>

        <Typography variant="h6">
          Resume Suggestions
        </Typography>

        <List>

          {suggestions?.map((item, index) => (
            <ListItem key={index}>
              • {item}
            </ListItem>
          ))}

        </List>

      </CardContent>
    </Card>
  );
}

export default FeedbackCard;