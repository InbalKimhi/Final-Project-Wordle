import './App.css';
import { Outlet } from 'react-router-dom';
import { NavBar } from './comp/NavBar';
import { ModalContext } from './Providers/ModalContext';
import React, { useState, useEffect } from 'react';

export function App() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showLogin, setshowLogin] = useState(false);

  const handleCloseLogin = () => setshowLogin(false);
  const handleShowLogin = () => setshowLogin(true);

  const [user,setuser] = useState(null)

  useEffect(() => {
    user ?
    localStorage.setItem(`${user.username}`, JSON.stringify(user)) :
    console.log('no user yet')
  }, [user]);

  return (
    <ModalContext.Provider value={{handleClose,handleShow,show,handleShowLogin,handleCloseLogin,showLogin,user,setuser}}>
    <NavBar/>
    <Outlet />
    </ModalContext.Provider>
  );
}

export default App;
