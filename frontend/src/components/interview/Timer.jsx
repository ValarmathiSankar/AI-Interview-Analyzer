import { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";

function Timer() {
  const [timeLeft, setTimeLeft] = useState(600); // 2 minutes

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          ⏱ {minutes}:{seconds}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Timer;