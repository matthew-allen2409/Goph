import React from 'react'
import Mordecai from '../img/BuffMordecai.png'

function Header(props) {
    return (
        <header>
            <div className='logo-container'>
                <img className='logo' src={Mordecai} />
                <h1>Project G</h1>
            </div>
            <div className='buttons'>
                <button className='signup' onClick={props.toggleSignup}>Sign up</button>
                <button className='login' onClick={props.toggleLogin}>Log in</button>
            </div>
        </header>
    )
}

export default Header