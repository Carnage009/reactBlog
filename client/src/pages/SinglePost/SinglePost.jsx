import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom'
import axios from 'axios';

const fetchPosts = (id) => {
  return axios.get(`http://localhost:8888/posts/${id}`)
}
const editPost = (id, newData) => {
  return axios.patch(`http://localhost:8888/posts/${id}`, newData);
};

const SinglePost = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newDescr, setNewDescr] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const { id } = useParams()
  const [post, setPost] = useState({})
  const [editMode, setEditMode] = useState(false)
  useEffect(() => {
    fetchPosts(id).then(res => setPost(res.data));
  }, [])


  const handleEditPost = (id) => {
    const newData = {
      title: newTitle,
      descr: newDescr,
      category: newCategory,
    };
    editPost(id, newData).then((res) => {
      setNewTitle("");
      setNewDescr("");
      setNewCategory("");
      setEditMode(false);
      setPost(res.data)
    });
  };

  return (
    <Card sx={{ maxWidth: 345 }} style={{ marginLeft: 650, marginTop: 20 }}>
      {editMode === true ? (
        <form style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "10px",
          }}>
          <TextField
            sx={{ width: "75%", marginBottom: 1 }}
            label="Title"
            variant="outlined"
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
          />
          <TextField
            sx={{ width: "75%", marginBottom: 1 }}
            label="Descr"
            variant="outlined"
            value={newDescr}
            onChange={e => setNewDescr(e.target.value)}
          />
          <TextField
            sx={{ width: "75%", marginBottom: 1 }}
            label="Category"
            variant="outlined"
            value={newCategory}
            onChange={e => setNewCategory(e.target.value)}
          />
          <Button
            sx={{ width: "75%", marginBottom: 1 }}
            variant="outlined"
            color="secondary"
            onClick={() => handleEditPost(id)}>
            Сохранить
          </Button>
          <Button
            sx={{ width: "75%", marginBottom: 1 }}
            variant="outlined"
            color="secondary"
            onClick={() => setEditMode(false)
            }>
            Отменить
          </Button>
        </form>) : (
        <>
          <CardMedia
            component="img"
            alt="Chinana"
            height="140"
            image="https://loremflickr.com/640/360"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.descr}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.category}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setEditMode(true)
              }>Редактировать</Button>
          </CardActions>
        </>
      )}

    </Card>
  );
}

export default SinglePost;