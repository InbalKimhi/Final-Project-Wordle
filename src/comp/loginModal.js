import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ModalContext } from '../Providers/ModalContext';
import { useRef } from 'react';

export function Login() {

    const {handleCloseLogin,showLogin,setuser} = useContext(ModalContext)
    const username = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    function handleUser(){
      const newUser = {username: username.current.value, email : email.current.value, password : password.current.value }
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
        centere
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
