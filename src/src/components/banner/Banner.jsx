import React from "react";
import { Box, Typography, styled } from "@mui/material";
const Image = styled(Box)`
  background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg)
    center/50% repeat-x #000;
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Heading = styled(Typography)`
  font-size: 100px;
  color: #ffffff;
  line-height: 1;
`;
const SubHeading = styled(Typography)`
  font-size: 25px;
  color: #ffffff;
`;
const Banner = () => {
  return (
    <Image style={{ marginTop: "63px" }}>
      <Heading>Blog</Heading>
      <SubHeading>Add Your Blog</SubHeading>
    </Image>
  );
};

export default Banner;
