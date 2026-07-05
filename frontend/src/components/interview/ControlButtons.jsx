import { Stack, Button } from "@mui/material";

function ControlButtons({
  onPrevious,
  onNext,
  disablePrevious,
  disableNext,
}) {
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
        disabled={disableNext}
      >
        Next
      </Button>
    </Stack>
  );
}

export default ControlButtons;