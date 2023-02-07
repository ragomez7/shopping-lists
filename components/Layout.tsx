import React, { ReactNode, useContext } from "react";
import { ThemeOptions } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { ModeContext } from "../pages/_app";
import SideBar from "./Sidebar";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const theme: ThemeOptions = useTheme();
  const { isLight } = useContext(ModeContext);
  return (
    <Box sx={{
      height: '100%',
      display: 'flex'
  }} >
      <SideBar />
      {props.children}
  </Box>
  );
};

export default Layout;
