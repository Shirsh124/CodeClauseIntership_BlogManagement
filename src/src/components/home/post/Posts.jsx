import React, { useEffect, useState } from "react";
import { API } from "../../../services/api.js";
import { Box, Grid } from "@mui/material";
import Post from "./Post.jsx";
import { useSearchParams,Link } from "react-router-dom";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  useEffect(() => {
    const fetchData = async () => {
      const response = await API.getAllPosts({ category: category || "" });
      if (response.isSuccess) {
        setPosts(response.data);
      }
    };
    fetchData();
  }, [category]);
  return (
    <>
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <Grid key={post._id} lg={3} sm={4} xs={12}>
            <Link to={`details/${post._id}`} style={{textDecoration:'none',color:'inherit'}}>
              <Post post={post} />
            </Link>
          </Grid>
        ))
      ) : (
        <Box style={{ color: "#878787", margin: "30px 80px", fontSize: 15 }}>
          No data available to display
        </Box>
      )}
    </>
  );
};

export default Posts;
