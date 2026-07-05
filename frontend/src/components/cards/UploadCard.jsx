import {
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

function UploadCard({
  file,
  setFile,
  handleUpload,
}) {
  return (
    <Card elevation={3}>
      <CardContent>

        <Typography variant="h6">
          Upload Resume
        </Typography>

        <br />

        <input
          type="file"
          accept=".pdf"
          onChange={(e) =>
            setFile(e.target.files[0])
          }
        />

        <br />
        <br />

        <Button
          variant="contained"
          onClick={handleUpload}
        >
          Analyze Resume
        </Button>

      </CardContent>
    </Card>
  );
}

export default UploadCard;