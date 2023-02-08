import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import SideBar from "./Sidebar";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  return (
    <Box 
      className="Layout"
      sx={{
        display: 'grid',
        gridTemplateColumns: '94px auto',
        gridTemplateRows: 'auto',
      }} 
    >
      <SideBar />
      {props.children}
  </Box>
  );
};

export default Layout;
