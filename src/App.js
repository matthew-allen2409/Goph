import React from 'react'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {

  const [showSignup, setShowSignup] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);

  function toggleSignup() {
    setShowSignup(prev => !prev)
  }

  function toggleLogin() {
    setShowLogin(prev => !prev)
  }

  function clearModal() {
    setShowLogin(false)
    setShowSignup(false)
  }
  
  return (
    <>
    <Header
      toggleSignup={toggleSignup}
      toggleLogin={toggleLogin}
    />
    <Sidebar />
    <Main />
    {(showLogin || showSignup) && 
    <div className='shadow' 
      onClick={clearModal}
    />}
    {showSignup && <Signup />}
    {showLogin && <Login />}
    </>
  )

}

export default App