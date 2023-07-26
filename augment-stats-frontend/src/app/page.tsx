// pages/index.tsx
import React from "react";
import AggregateStats from "../components/AggregateStats";
import { Box, Typography } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Box maxWidth="xl" mx="auto" px={3}>
      <Typography variant="h3" mb={4}>
        TFT Augment Statistics
      </Typography>
      <AggregateStats />
    </Box>
  );
};

export default Home;
