import React from "react";

const Login = () => {
    return (
        <div>
            <form className="user-form">
                <label>
                    <input type="text" placeholder="username"/>
                </label>
                <label>
                    <input type="password" placeholder="password"/>
                </label>
                <label>
                    <button>Login</button>
                </label>
            </form>
        </div>
    )
}

export default Login;