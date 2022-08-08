import React from 'react'
import Cookies from 'js-cookie'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Signup from './components/Signup'
import Login from './components/Login'
import CreateEvent from './components/CreateEvent'


function App() {
  const [showSignup, setShowSignup] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);
  const [showCreateEvent, setShowCreateEvent] = React.useState(false);
  const [JWT, setJWT] = React.useState(null)
  
  React.useEffect(() => {
    setJWT(Cookies.get('JWT'));
  }, [])

  function toggleSignup() {
    setShowSignup(prev => !prev);
  }

  function toggleLogin() {
    setShowLogin(prev => !prev);
  }

  function toggleCreateEvent() {
    setShowCreateEvent(prev => !prev);
  }

  function clearModal() {
    setShowLogin(false);
    setShowSignup(false);
    setShowCreateEvent(false);
  }

  
  return (
    <>
    <Header
      toggleSignup={toggleSignup}
      toggleLogin={toggleLogin}
      JWT={JWT}
      setJWT={setJWT}
    />
    <Sidebar
      toggleShowCreateEvent={toggleCreateEvent}
    />
    <Main />
    {(showLogin || showSignup || showCreateEvent) && 
    <div className='shadow' 
      onClick={clearModal}
    />}
    {showSignup && <Signup />}
    {showLogin && <Login
        closeWindow={toggleLogin} 
        setJWT={setJWT}
      />
    }
    {showCreateEvent && <CreateEvent />}
    </>
  )

}

export default App
