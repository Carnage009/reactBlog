import React, { useState } from "react";
import "./CreatePost.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import SnackbarComponent from "../../components/Snackbar/Snackbar";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event) => {
    setOpen(false);
  };

  const handleAddPost = () => {
    axios
      .post("http://localhost:8888/posts", {
        title,
        descr,
        category,
      })
      .then(() => {
        setTitle("");
        setDescr("");
        setCategory("");
        handleClick();
      });
  };

  return (
    <>
      <form
        style={{
          height: "30vh",
          margin: "20px auto",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          width: "30%",
        }}
      >
        <TextField
          label="Введите заголовок"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Введите описание"
          variant="outlined"
          value={descr}
          onChange={(e) => setDescr(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={handleChange}
          >
            <MenuItem value={0}>Новости</MenuItem>
            <MenuItem value={1}>Статьи</MenuItem>
          </Select>
        </FormControl>
        <Button variant="outlined" color="success" onClick={handleAddPost}>
          Создать пост
        </Button>
      </form>
      <SnackbarComponent
        handleClose={handleClose}
        open={open}
        message={"Пост успешно создан"}
      />
    </>
  );
};

export default CreatePost;
