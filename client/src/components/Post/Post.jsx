import axios from 'axios';
import React from 'react';
import Button from '@mui/material/Button';

const Post = (props) => {

    return (
        <div className='post'>
            <h5 className='title'>Заголовок: {props.title}</h5>
            <p className='descr'>Описание: {props.descr}</p>
            <p className='category'>Категория: {props.category}</p>
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