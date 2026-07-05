import { Card, CardContent, Typography } from "@mui/material";

function TranscriptBox() {

  return (

    <Card>

      <CardContent>

        <Typography variant="h6">

          Transcript

        </Typography>

        <Typography>

          Waiting for speech...

        </Typography>

      </CardContent>

    </Card>

  );

}

export default TranscriptBox;