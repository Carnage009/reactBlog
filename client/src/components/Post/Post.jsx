import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Post = (props) => {

  return (
    <div className="post">
      <Link to={`/singlepost/${props.id}`} className="title">
        Заголовок: {props.title}
      </Link>
      <p className="descr">Описание: {props.descr}</p>
      <p className="category">Категория: {props.category}</p>
      <p className="author">Автор: {props.author}</p>
      <Button
              variant="outlined"
              color="error"
              onClick={() => {
              props.handleDeletePost(props.id)
              }}>Удалить</Button>
    </div>
  );
};

export default Post;
