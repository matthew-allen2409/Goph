import React, { useState } from "react";

function Signup() {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [invalid, setInvalid] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const newUser = {
            "username": username,
            "firstName": firstName,
            "lastName": lastName,
            "password": password,
            "confirmPassword": confirmPassword
        };
        if (password === confirmPassword) {
            fetch("/api/create_user", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(newUser)
            });
        }
        else {
            setInvalid('Passwords must match');
        }
    }

    return (
        <div className="signupContainer">
            <div className="signupHead">
                <h1>Signup</h1>
            </div>
            <p>{invalid}</p>
            <form className="login--form" onSubmit={handleSubmit}>
                <label>
                    *Username:
                    <input
                    type="text"
                    name="username"
                    required
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    First Name:
                    <input
                    type="text"
                    name="firstName"
                    required
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                    type="text"
                    name="lastName"
                    required
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    />
                </label>
                <label>
                    *Password:
                    <input
                    type="password"
                    name="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                </label>
                <label>
                    *Confirm Password:
                    <input
                    type="password"
                    name="confirm"
                    required
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    />
                </label>
                <input
                    type="submit"
                    value="Sign Up"
                    className="button--submit"
                />
            </form>
        </div>
    )
}

export default Signup