"use client";
import React from "react";
import useGetAugmentData, { AugmentData } from "../hooks/useGetAugmentData";
import AugmentTable from "../components/AugmentTable";
import { Container, Typography } from "@mui/material";

const IndexPage: React.FC = () => {
  const { data, isLoading, isError } = useGetAugmentData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h1" component="h1" gutterBottom>
        Rat Stats xdd
      </Typography>
      <Typography variant="body1" gutterBottom>
        Augment Placement stats for all NA/KR/EUW players in Masters+, over 200k
        matches analyzed. <br></br>
        Stage by stage coming soon
      </Typography>
      <AugmentTable data={data} />
    </Container>
  );
};

export default IndexPage;
