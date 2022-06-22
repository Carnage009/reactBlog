import React from 'react';
import { NavLink } from "react-router-dom"
import headerLogo from "../../assets/images/logo.jpg";
import "./header.css";
import Nav from "../Nav/Nav";

const Header = () => {
    return (
    <header className="header">
        <img className="header-logo" src={headerLogo} alt="Header Logo"></img>
            <Nav />
                <div className='header-btns'>
                    <NavLink to="/auth/login" className='btn'>Войти и выйти приключение на 15 минут</NavLink>
                    <NavLink to="/auth/registration" className='btn'>Зарегистрироваться</NavLink>
                </div>
    </header>

    );
};

export default Header;