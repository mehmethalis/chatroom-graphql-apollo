import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <h2 className="logo__title">ChatRoom</h2>
            </div>

            <div className="header_menu">
                <NavLink to={"/"} exact>ChatRoom</NavLink>
                <NavLink to={"/login"}>Login</NavLink>
                <NavLink to={"/join"}>Join</NavLink>
            </div>
        </div>
    )
}

export default Header;