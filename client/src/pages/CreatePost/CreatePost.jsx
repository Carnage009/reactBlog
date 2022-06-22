import React, { useState } from 'react';
import "./CreatePost.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const CreatePost = () => {
    const [title, setTitle] =useState("")
    const [descr, setDescr] =useState("")
    const [category, setCategory] =useState("")

    const [open, setOpen] = React.useState(false);


    const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = (event) => {
        setOpen(false);
      };
    
      const action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={handleClose}>
            Закрыть
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );

    const handleAddPost = () => {
        axios.post("http://localhost:8888/posts", {
            title,
            descr,
            category
        })
        .then(() => {
            setTitle("")
            setDescr("")
            setCategory("")
            handleClick()
        })

    }

    return (
        <>
        <form style={{height:"30vh", margin: "20px auto", display: "flex", justifyContent: "space-between", flexDirection: "column", width: "30%",}}>
            <TextField label="Введите заголовок" variant="outlined" value={title} onChange={e => setTitle(e.target.value)} />
            <TextField label="Введите описание" variant="outlined" value={descr} onChange={e => setDescr(e.target.value)} />
            <TextField label="Введите категорию" variant="outlined" value={category} onChange={e => setCategory(e.target.value)} />
            <Button variant="outlined" color="success" onClick={handleAddPost}>Создать пост</Button>
        </form>
        <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Пост создан"
        action={action}
        />
        </>
    );
};

export default CreatePost;