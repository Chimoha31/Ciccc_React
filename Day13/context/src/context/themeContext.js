import { createContext } from "react";


export const theme = {
  dark: {
    body: {
      background: "#263238",
    },
    button: {
      color: "#B0BEC5",
      background: "#263238",
    },
    text: {
      color: "#445809",
    },
  },
  light: {
    body: {
      background: "#F9FBE7",
    },
    button: {
      color: "#9E9D24",
      background: "#F9FBE7",
    },
    text: {
      color: "#9E9D24",
    }
  }
}

const ThemeContext = createContext(theme.dark);

export default ThemeContext;