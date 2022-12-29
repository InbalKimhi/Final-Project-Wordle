import { useContext } from "react";
import {Link} from "react-router-dom";
import { ModalContext } from "../Providers/ModalContext";
import { Example } from "./Modal";

export function NavBar(){

    const {handleShow} = useContext(ModalContext)

    return(
        <>
        <nav className="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <Link class="navbar-brand" to={`game`}>Wordle</Link>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <Link class="nav-link active" aria-current="page" to={`/`}>Home</Link>
            </div>
            <div class="navbar-nav">
            <Link class='nav-link active' onClick={handleShow}> Info </Link>
            <Example/>
            </div>
            </div>
        </div>
        </nav>
        </>
    )
}


