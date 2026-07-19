import { Card, CardContent, Typography } from "@mui/material";
import { useContext } from "react";
import { InterviewContext } from "../../context/InterviewContext";

function TranscriptBox() {

  const { transcript } = useContext(InterviewContext);

  return (

    <Card>

      <CardContent>

        <Typography variant="h6">

          Transcript

        </Typography>

        <Typography>

          {transcript || "Waiting for speech..."}
          
        </Typography>

      </CardContent>

    </Card>

  );

}

export default TranscriptBox;