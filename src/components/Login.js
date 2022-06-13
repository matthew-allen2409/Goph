import React from "react";

function Login() {
    return (
        <div className="signupContainer">
            <div className="signupHead">
                <h1>Login</h1>
            </div>
            <div className="login--form">
                <label>
                    Userame:
                    <input type="text" name="username" />
                </label>
                <label>
                    Password:
                    <input type="text" name="password" />
                </label>
                <input
                    type="submit"
                    value="Log in"
                    className="button--submit"
                />
            </div>
        </div>
    )
}

export default Login