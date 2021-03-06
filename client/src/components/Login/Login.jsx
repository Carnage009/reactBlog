import React, { useState, useContext } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";
import SnackbarComponent from "../Snackbar/Snackbar";
import { Context } from "../../Context/Context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [message, setMessage] = useState(false)
  const {dispatch} = useContext(Context)

  const handleSnackbarClose = () => {
    setSnackbarOpen(false)
  }

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8888/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        setMessage("Вы успешно вошли в Кенана")
        setEmail("")
        setPassword("")
        dispatch({type : "LOGIN_SUCCESS", payload : res.data.user})
        console.log(res.data.user);
      })
      .catch(err => {
        setMessage(err.response.data) 
      })
      .finally(() => {
        setSnackbarOpen(true)
      })
  };
  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <TextField
          sx={{ width: "75%", marginBottom: 1 }}
          label="email"
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
        />
        <TextField
          sx={{ width: "75%", marginBottom: 1 }}
          label="password"
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
        />
        <Button
          sx={{ width: "75%", marginBottom: 1 }}
          variant="outlined"
          color="success"
          onClick={handleLogin}
          type="submit"
        >
          Зарегистрироваться
        </Button>
      </form>
      <div className="user-info">
        <p className="login-info"></p>
        <p className="age-info"></p>
      </div>
      <SnackbarComponent
        open={snackbarOpen}
        message={message}
        handleClose={handleSnackbarClose}
      />
    </>
  );
};

export default Login;