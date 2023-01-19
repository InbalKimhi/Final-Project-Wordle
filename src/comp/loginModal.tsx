import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { InterfaceModalContext, ModalContext } from '../Providers/ModalContext';
import { useRef } from 'react';
import { User } from '../Providers/ModalContext';

export function Login() :JSX.Element{

    const {handleCloseLogin,showLogin,setuser} = useContext(ModalContext) as InterfaceModalContext
    const username : React.MutableRefObject<HTMLInputElement | null> = useRef(null);
    const email : React.MutableRefObject<HTMLInputElement | null> = useRef(null);
    const password : React.MutableRefObject<HTMLInputElement | null> = useRef(null);

    function handleUser(){
      const newUser : User = {username: username.current?.value, email : email.current?.value, password : password.current?.value }
      setuser(newUser)
      handleCloseLogin()
    }

  return (
    <>
      <Modal
        show={showLogin}
        onHide={handleCloseLogin}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centere='true'
      >
        <Modal.Header closeButton>
          <Modal.Title>LOGIN FORM</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">log into your account</h3>
          <div className="form-group mt-3">
            <label>username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter username"
              ref={username}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              ref={email}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              ref={password}
            />
          </div>
        </div>
        </form>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLogin}>Close</Button>
          <Button variant="primary" onClick={handleUser}>log me in</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
