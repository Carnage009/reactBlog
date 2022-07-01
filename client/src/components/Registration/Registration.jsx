import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";
import SnackbarComponent from "../Snackbar/Snackbar";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [message, setMessage] = useState(false)

  const handleSnackbarClose = () => {
    setSnackbarOpen(false)
  }

  const handleRegistration = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8888/users", {
        email: email,
        password: password,
      })
      .then((data) => {
        setMessage("Вы успешно зарегистрировались")
        setEmail("");
        setLogin("");
        setPassword("");
      })
      .catch((error) => {
        setMessage(error.response.data) 
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
          label="login"
          type={"text"}
          value={login}
          onChange={(e) => setLogin(e.target.value)}
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
          onClick={handleRegistration}
          type="submit"
        >
          Зарегистрироваться
        </Button>
      </form>
      <SnackbarComponent
        open={snackbarOpen}
        message={message}
        handleClose={handleSnackbarClose}
      />
    </>
  );
};

export default Registration;
