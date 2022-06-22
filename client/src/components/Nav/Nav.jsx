import React from 'react';
import { NavLink } from "react-router-dom"
import "./Nav.css"

const Nav = () => {
    return (
        <nav>
        <div className='header-links'>
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/CreatePost">Создание поста</NavLink>
            <NavLink to="/posts">Все посты</NavLink>
            <NavLink to="/post">Мои посты</NavLink>
        </div>
    </nav>
    );
};

export default Nav;