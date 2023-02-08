import React, { useState } from "react";
import { AppProps } from "next/app";
import { grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../styles/globals.css";

declare module "@mui/material/styles" {
  interface Theme {
    colors: {
      black: string;
      white: string;
      grey: string;
      grey200: string;
    };
  }
  interface ThemeOptions {
    colors?: {
      black?: string;
      white?: string;
      grey?: string;
      grey200?: string;
    };
  }
  interface Palette {
    white: Palette["primary"];
  }
  interface PaletteOptions {
    white: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    grey: grey[500],
    grey200: grey[200],
  },
  palette: {
    white: {
      main: "#FFFFFF",
    },
  },
});

interface ModeContextProps {
  isLight: boolean;
  setIsLight: any;
}
export const ModeContext = React.createContext<ModeContextProps>({
  isLight: true,
  setIsLight: undefined,
});

const App = ({ Component, pageProps }: AppProps | any) => {
  const [isLight, setIsLight] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <ModeContext.Provider value={{ isLight, setIsLight }}>
        <Component {...pageProps} />
      </ModeContext.Provider>
    </ThemeProvider>
  );
};

export default App;
