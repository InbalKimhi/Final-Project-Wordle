import { useContext } from "react";
import {Link} from "react-router-dom";
import { ModalContext } from "../Providers/ModalContext";
import { Example } from "./Modal";
import { Login } from "./loginModal";

export function NavBar(){

    const {handleShow,handleShowLogin} = useContext(ModalContext)

    return(
        <>
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to={`game`}>Wordle</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to={`/`}>Home</Link>
            </div>
            <div className="navbar-nav">
            <Link className='nav-link active' onClick={handleShow}> Info </Link>
            <Example/>
            </div>
            <div className="navbar-nav">
                <Link className="nav-link active" onClick={handleShowLogin}>login</Link>
                <Login/>
            </div>
            </div>
        </div>
        </nav>
        </>
    )
}


