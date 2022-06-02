import React, { useState } from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";

const App = () => {
  const [selectNumber, setSelectNumber] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("pink");
  const [stop, setStop] = useState("");

  let colorArray = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#E666B3",
    "#33991A",
    "#CC9999",
    "#B3B31A",
    "#00E680",
    "#4D8066",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#9900B3",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
  ];

  const handleTimeout = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setBackgroundColor("yellow");
    }, selectNumber);
  };

  const handleInterval = () => {
    let time = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * colorArray.length);
      const randomColor = colorArray[randomIndex];
      console.log(randomColor);
      setBackgroundColor(randomColor);
    }, selectNumber);
    setStop(time);
  };

  const handleClear = () => {
    clearInterval(stop);
  }

  return (
    <div>
      <Grid
        container
        spacing={2}
        className="grid-container"
        style={{ background: backgroundColor }}
      >
        <Grid item xs={6} md={8} className="grid-item">
          <TextField
            required
            id="outlined-required"
            label="Required"
            type="number"
            value={selectNumber}
            onChange={(e) => setSelectNumber(e.target.value)}
          />
          <Button variant="contained" color="warning" onClick={handleTimeout}>
            TimeOut
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleInterval}
          >
            Interval
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClear}
          >
            Stop
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
