import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import ThemeContext, { theme } from "./context/themeContext";
import Switch from "@mui/material/Switch";
import { AppBar, InputLabel, Toolbar } from "@mui/material";

const App = () => {
  const [themeColor, setThemeColor] = useState(theme.dark);

  const handleSwitch = () => {
    setThemeColor(theme.light);

    themeColor === theme.dark ? setThemeColor(theme.light) : setThemeColor(theme.dark);
  }

  return (
    <ThemeContext.Provider value={themeColor} >
      <AppBar position="static" color="warning">
        <Toolbar style={{display: "flex", justifyContent: "flex-end"}}>
          <InputLabel>Switch Theme</InputLabel>
          <Switch defaultChecked onClick={handleSwitch} />
        </Toolbar>
      </AppBar>

      <div>
        <Home />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
