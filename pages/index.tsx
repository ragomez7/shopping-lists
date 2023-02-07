import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { Box } from "@mui/material";

const Index = () => {
  useEffect(() => {
    document.location.href = `/shopping`
  }, [])
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: 'column',
          marginTop: 30,
        }}
      >
      </Box>
    </Layout>
  );
};

export default Index;
