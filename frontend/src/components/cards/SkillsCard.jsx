import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

function SkillsCard({ skills }) {
  return (
    <Card elevation={3}>
      <CardContent>

        <Typography variant="h6" gutterBottom>
          Skills
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {skills?.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              color="primary"
            />
          ))}
        </Stack>

      </CardContent>
    </Card>
  );
}

export default SkillsCard;