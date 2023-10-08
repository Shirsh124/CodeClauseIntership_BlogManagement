import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../../context/DataProvider.jsx";
import { API } from "../../services/api.js";
import {
  Box,
  styled,
  FormControl,
  InputBase,
  Button,
  TextareaAutosize,
} from "@mui/material";
import { AddCircle as Add } from "@mui/icons-material";
const Container = styled(Box)(({ theme }) => ({
  margin: "50px 100px",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));
const Image = styled("img")({
  width: "100%",
  height: "50vh",
  objectFit: "cover",
});
const StyleFormControl = styled(FormControl)`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
`;
const InputTextField = styled(InputBase)`
  flex: 1;
  margin: 0 20px;
`;
const StyleTextArea = styled(TextareaAutosize)`
  width: 100%;
  margin-top: 20px;
  font-size: 20px;
`;
const initialPost = {
  title: "",
  description: "",
  picture: "",
  username: "",
  categories: "",
  createDate: new Date(),
};

const Update = () => {
  const [post, setPost] = useState(initialPost);
  const { id } = useParams();
  const [file, setFile] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { account } = useContext(DataContext);
  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getPostById(id);
      if (response.isSuccess) {
        setPost(response.data);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        const response = await API.uploadFile(data);
        post.picture = response.data;
      }
    };
    getImage();
    post.categories = location.search?.split("=")[1] || "All";
    post.username = account.username;
  }, [file]);
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const updateBlogPost = async () => {
    let response = await API.updatePost(post);
    if (response.isSuccess) {
      navigate(`/details/${id}`);
    }
  };
  return (
    <Container>
      <Image src={url} alt="banner" />
      <StyleFormControl>
        <label htmlFor="fileInput">
          <Add fontSize="large" />
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <InputTextField
          placeholder="Title"
          value={post.title}
          name="title"
          onChange={(e) => handleChange(e)}
        />
        <Button variant="contained" onClick={() => updateBlogPost()}>
          Update
        </Button>
      </StyleFormControl>
      <StyleTextArea
        minRows={5}
        placeholder="Tell your story..."
        name="description"
        value={post.description}
        onChange={(e) => handleChange(e)}
      />
    </Container>
  );
};

export default Update;
