import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { Box } from "@mui/material";

const Index = () => {
  useEffect(() => {
    document.location.href = '/shopping'
  }, [])
  return (
    <Layout>
      <Box className="flex justify-center items-center flex-col mt-[30px]">
      </Box>
    </Layout>
  );
};

export default Index;
