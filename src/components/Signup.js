import React from "react";

function Signup() {
    return (
        <div className="signupContainer">
            <div className="signupHead">
                <h1>Signup</h1>
            </div>
            <div className="login--form">
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <label>
                    Password:
                    <input type="text" name="password" />
                </label>
                <label>
                    Confirm Password:
                    <input type="text" name="confirm" />
                </label>
                <input
                    type="submit"
                    value="Sign Up"
                    className="button--submit"
                />
            </div>
        </div>
    )
}

export default Signup