import Cookies from 'js-cookie'

import React from 'react'
import Mordecai from '../img/BuffMordecai.png'


function Header(props) {
    const JWT = props.JWT

    function logout() {
      Cookies.remove('JWT');
      props.setJWT(null);
    }

    return (
        <header>
            <div className='logo-container'>
                <img className='logo' src={Mordecai} />
                <h1>Project G</h1>
            </div>
            {!JWT ? 
            <div className='buttons'>
                <button className='signup' onClick={props.toggleSignup}>Sign up</button>
                <button className='login' onClick={props.toggleLogin}>Log in</button>
            </div> :
            <div className='buttons'>
               <button className='logout' onClick={logout}>Log out</button>
            </div>
            }
        </header>
    )
}

export default Header
