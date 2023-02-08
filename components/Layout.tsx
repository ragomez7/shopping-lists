import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import SideBar from "./Sidebar";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
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
