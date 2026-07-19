import { Stack, Button } from "@mui/material";
import { useContext } from "react";
import { InterviewContext } from "../../context/InterviewContext";
import useRecorder from "../../hooks/useRecorder";
import { transcribeAudio } from "../../api/speechApi";

function ControlButtons({
  onPrevious,
  onNext,
  disablePrevious,
  disableNext,
}) {

const { setTranscript } = useContext(InterviewContext);

const {
  isRecording,
  startRecording,
  stopRecording,
} = useRecorder();

const handleStart = async () => {
  console.log("Start button clicked");

  try {
    await startRecording();
    console.log("Recording started");
  } catch (err) {
    console.error(err);
  }
};

const handleStop = async () => {
  const audioBlob = await stopRecording();

  const result = await transcribeAudio(audioBlob);

  setTranscript(result.transcript);
};


return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <Button
        variant="outlined"
        onClick={onPrevious}
        disabled={disablePrevious}
      >
        Previous
      </Button>

      <Button
        variant="contained"
        onClick={onNext}
        disabled={false}
      >
        {disableNext ? "Finish Interview" : "Next"}
      </Button>

      <Button
        variant="contained"
        color="success"
        onClick={handleStart}
        disabled={isRecording}
      >
        Start Recording
      </Button>

      <Button
        variant="contained"
        color="error"
        onClick={handleStop}
        disabled={!isRecording}
      >
        Stop Recording
      </Button>
    </Stack>
  );
}

export default ControlButtons;