import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import SideBar from "./Sidebar";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  return (
    <Box className="grid grid-cols-[94px_auto] grid-rows-[auto]">
      <SideBar />
      {props.children}
  </Box>
  );
};

export default Layout;
