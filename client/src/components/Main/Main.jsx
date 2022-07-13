import React, { useState, useEffect } from "react";
import Post from "../Post/Post.jsx";
import axios from "axios";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const fetchPosts = () => {
  return axios.get("http://localhost:8888/posts");
};
const deletePost = (id) => {
  return axios.delete(`http://localhost:8888/posts/${id}`);
};

const Main = (props) => {
  const [posts, setPosts] = useState([]);
  const [filPosts, setFilPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("");
  useEffect(() => {
    fetchPosts().then((res) => setPosts(res.data.reverse()));
  }, []);

  useEffect(() => {
    if (category === "Все" || category === "") {
      setFilPosts(posts);
    } else {
      setFilPosts(
        posts.filter((post) => {
          return post.category === category;
        })
      );
    }
  }, [category, posts]);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };

  const action = (
    <React.Fragment>
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

  const handleDeletePost = (id) => {
    deletePost(id).then(() => {
      setPosts(
        posts.filter((post) => {
          return post.id !== id;
        })
      );
      handleClick();
    });
  };

  return (
    <main>
      <FormControl
        sx={{
          marginTop: "20px",
          marginLeft: "600px",
          marginBottom: "20px",
          width: "25%",
        }}
      >
        <InputLabel id="demo-simple-select-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={""}>Все посты</MenuItem>
          <MenuItem value={0}>Новости</MenuItem>
          <MenuItem value={1}>Статьи</MenuItem>
        </Select>
      </FormControl>
      <div className="post-wrapper">
        {filPosts.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              descr={post.descr}
              category={post.category}
              author={post.author}
              handleDeletePost={handleDeletePost}
            />
          );
        })}
      </div>

      <>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Post deleted"
          action={action}
        />
      </>
    </main>
  );
};

export default Main;
