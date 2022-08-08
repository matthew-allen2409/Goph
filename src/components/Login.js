import React from "react";
import Cookies from "js-cookie";

function Login(props) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.closeWindow();
        const credentials = {
            "username": username,
            "password": password
        }
        fetch('/api/login',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(res => res.json())
        .then(body => Cookies.set('JWT', body.JWT))
        .then(() => props.setJWT(Cookies.get('JWT')))
        console.log('logged in');
    }

    return (
        <div className="signupContainer">
            <div className="signupHead">
                <h1>Login</h1>
            </div>
            <form className="login--form" onSubmit={handleSubmit}>
                <label>
                    Userame:
                    <input
                    type="text"
                    name="username"
                    required
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input
                    type="password"
                    name="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                </label>
                <input
                    type="submit"
                    value="Log in"
                    className="button--submit"
                />
            </form>
        </div>
    )
}

export default Login
