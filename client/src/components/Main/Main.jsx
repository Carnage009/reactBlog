import React, { useState, useEffect } from 'react';
import Post from '../Post/Post.jsx';
import axios from "axios"
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const fetchPosts = () => {
    return axios.get("http://localhost:8888/posts")
}
const deletePost = id => {
    return axios.delete(`http://localhost:8888/posts/${id}`)
}

const Main = (props) => {
    const [posts, setPosts] = useState([])
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        fetchPosts().then(res => setPosts(res.data))
    }, [])

    const handleClose = () => {
        setOpen(false)
    }
    const handleClick = () => {
        setOpen(true);
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

    const handleDeletePost = (id) => {
        deletePost(id).then(() => {
            setPosts(posts.filter((post) => {
                return post.id !== id;
            })
            );
            handleClick()
        });
    };

    return (
        <main>
            {posts.map((post) => {
                return <Post key={post.id} id={post.id} title={post.title} descr={post.descr} category={post.category} handleDeletePost={handleDeletePost} />
            })}
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