import React, { useState, useEffect } from 'react';
import Post from '../Post/Post.jsx';
import axios from "axios"

const fetchPosts = () => {
    return axios.get("http://localhost:8888/posts")
}
const deletePost = id => {
    return axios.delete(`http://localhost:8888/posts/${id}`)
}

const Main = (props) => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetchPosts().then(res => setPosts(res.data))
    }, [])

    const handleDeletePost = (id) => {
        deletePost(id).then(() => {
            setPosts(posts.filter((post) => {
                return post.id !== id;
            })
            );
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
                message="Пост создан"
                action={action}
                />
                </>
        </main>

    );
};

export default Main;