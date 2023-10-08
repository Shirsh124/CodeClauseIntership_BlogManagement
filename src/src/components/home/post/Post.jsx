import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { addElipsis } from "../../../utils/common-utils";
const Container = styled(Box)`
  border: 1px solid #d3cede;
  margin: 10px;
  border-radius: 10px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > p {
    padding: 0 5px 5px 5px;
  }
`;
const Image = styled("img")({
  width: "100%",
  borderRadius: "10px 10px 0 0",
  objectFit: "cover",
  height: "180px",
});
const Post = ({ post }) => {
  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";
  return (
    <Container>
      <Image src={url} alt="blog" />
      <Typography style={{ color: "#878787", fontSize: "12px" }}>
        {post.categories}
      </Typography>
      <Typography
        style={{ fontSize: "18px", fontWeight: 600, wordBreak: "break-word" }}
      >
        {addElipsis(post.title, 20)}
      </Typography>
      <Typography style={{ color: "#878787", fontSize: "12px" }}>
        {post.username}
      </Typography>
      <Typography style={{ fontSize: "14px", wordBreak: "break-word" }}>
        {addElipsis(post.description, 100)}
      </Typography>
    </Container>
  );
};

export default Post;
