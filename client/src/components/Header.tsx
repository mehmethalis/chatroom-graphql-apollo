import React from 'react';
import {NavLink} from "react-router-dom";
import Logout from "./Logout";

const Header = ({session}: any) => {
    return (
        <div className="header">
            <div className="logo">
                <h2 className="logo__title">ChatRoom</h2>
            </div>

            <div className="header_menu">
                <NavLink to={"/"} exact>ChatRoom</NavLink>
                {
                    session.activeUser ? <LinksWithLogin session={session}/> : <LinksWithUnLogin />
                }
            </div>
        </div>
    )
}

const LinksWithLogin = ({session}:any) => (
    <>
        <NavLink to={"/profile"}>@{session.activeUser.userName}</NavLink>
        <Logout/>
    </>
)
const LinksWithUnLogin = () => (
    <>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/join"}>Join</NavLink>
    </>
)
export default Header;