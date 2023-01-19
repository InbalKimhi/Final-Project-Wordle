import './App.css';
import { Outlet } from 'react-router-dom';
import { NavBar } from './comp/NavBar';
import { ModalContext, User } from './Providers/ModalContext';
import React, { useState, useEffect } from 'react';

export function App(): JSX.Element {

  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showLogin, setshowLogin] = useState<boolean>(false);

  const handleCloseLogin = () => setshowLogin(false);
  const handleShowLogin = () => setshowLogin(true);

  const [user,setuser] = useState<User | null>(null)

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
