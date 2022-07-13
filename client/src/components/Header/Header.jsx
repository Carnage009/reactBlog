import React from 'react';
import { NavLink } from "react-router-dom"
import headerLogo from "../../assets/images/logo.jpg";
import "./header.css";
import Nav from "../Nav/Nav";
import { Context } from "..//..//Context/Context"
import { useContext } from 'react';
import { Logout } from '../../Context/Actions';
import { useState } from 'react';
import { useEffect } from 'react';

const Header = () => {
    const [isAuth, setIsAuth] = useState(false)
    const {user, dispatch} = useContext(Context)
    console.log(user);
    useEffect(() => {
        if(user !== null){
            setIsAuth(true)
        }else{
            setIsAuth(false)
        }
    }, [user])
    const logout = () => {
        dispatch(Logout())
        localStorage.removeItem("user")
    }
    return (
    <header className="header">
        <img className="header-logo" src={headerLogo} alt="Header Logo"></img>
            <Nav />
                <div className='header-btns'>
                    <NavLink to="/auth/login" className='btn'>Войти и выйти приключение на 15 минут</NavLink>
                    <NavLink to="/auth/registration" className='btn'>Зарегистрироваться</NavLink>
                    {isAuth === true && <button onClick={logout} className='btn'>Выйти</button>}
                    
                </div>
                <div className="user-info">
                     <p className="login-info">{ user?.login }</p>
                     <p className="login-info">{ user !== null ? user.login : "loh" }</p>
                </div>
    </header>

    );
};

export default Header;