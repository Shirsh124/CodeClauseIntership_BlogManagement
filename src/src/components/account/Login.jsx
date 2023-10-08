import React, { useState, useContext } from "react";
import { Box, TextField, Button, styled, Typography } from "@mui/material";
import { API } from "../../services/api.js";
import { DataContext } from "../../context/DataProvider.jsx";
import { useNavigate } from "react-router-dom";
const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`;
const Image = styled("img")({
  width: 100,
  display: "flex",
  margin: "auto",
  padding: "50px 0 0 0",
});
const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 15px;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #ffffff;
  height: 40px;
`;
const SignupButton = styled(Button)`
  text-transform: none;
  background: #ffffff;
  color: #2874f0;
  height: 40px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 25%);
`;
const Error = styled(Typography)`
  font-size: 15px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;
const signupInitialValues = {
  name: "",
  username: "",
  password: "",
};
const loginInitialValues = {
  username: "",
  password: "",
};
const Login = ({ isUserAuthenticated }) => {
  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";
  const [account, toggleAccount] = useState("login");
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState("");
  const { setAccount } = useContext(DataContext);
  const navigate = useNavigate();
  const toggleSignup = () => {
    if (account === "login") {
      toggleAccount("signup");
    } else {
      toggleAccount("login");
    }
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const signupUser = async () => {
    const response = await API.userSignup(signup);
    if (response.isSuccess) {
      setError("");
      setSignup(signupInitialValues);
      toggleAccount("login");
    } else {
      setError("Something went wrong!Please try again later.");
    }
  };
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const loginUser = async () => {
    const response = await API.userLogin(login);
    if (response.isSuccess) {
      setError("");
      sessionStorage.setItem(
        "accessToken",
        `Bearer ${response.data.accessToken}`
      );
      sessionStorage.setItem(
        "refreshToken",
        `Bearer ${response.data.refreshToken}`
      );
      setAccount({
        username: response.data.username,
        name: response.data.name,
      });
      isUserAuthenticated(true);
      navigate("/");
    } else {
      setError("Something went wrong!Please try again later.");
    }
  };
  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="Error loading" />
        {account === "login" ? (
          <Wrapper>
            <TextField
              variant="standard"
              label="Enter username"
              value={login.username}
              name="username"
              onChange={(e) => onValueChange(e)}
            />
            <TextField
              variant="standard"
              type="password"
              label="Enter password"
              value={login.password}
              name="password"
              onChange={(e) => onValueChange(e)}
            />
            {/* {error && <Error>{error}</Error>} */}
            <LoginButton variant="contained" onClick={() => loginUser()}>
              Login
            </LoginButton>
            <Typography style={{ textAlign: "center" }}>OR</Typography>
            <SignupButton onClick={() => toggleSignup()}>
              Create an account
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="name"
              label="Enter name"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="username"
              label="Enter username"
            />
            <TextField
              variant="standard"
              type="password"
              onChange={(e) => onInputChange(e)}
              name="password"
              label="Enter password"
            />
            {error && <Error>{error}</Error>}
            <SignupButton onClick={() => signupUser()}>Signup</SignupButton>
            <Typography style={{ textAlign: "center" }}>OR</Typography>
            <LoginButton variant="contained" onClick={() => toggleSignup()}>
              Already have an account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
