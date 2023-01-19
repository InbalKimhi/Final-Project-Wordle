import { useContext } from "react";
import {Link} from "react-router-dom";
import { InterfaceModalContext, ModalContext } from "../Providers/ModalContext";
import { Example } from "./Modal";
import { Login } from "./loginModal";


export function NavBar() :JSX.Element{

    const {handleShow,handleShowLogin,user} = useContext(ModalContext) as InterfaceModalContext
    function handleLogout(){
        localStorage.removeItem(`${user?.username}`)
    }

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
            <Link className='nav-link active' to={''} onClick={handleShow}> Info </Link>
            <Example/>
            </div>
            <div className="navbar-nav">
                {user ?  
                <>
                <Link to={''} className='nav-link active'> hello {user.username}</Link>
                <Link to={''} className='nav-link active' onClick={handleLogout}>logout</Link> 
                </>:
                <>
                <Link to={''} className="nav-link active" onClick={handleShowLogin}>login</Link>
                <Login/>
                </>}
            </div>
            </div>
        </div>
        </nav>
        </>
    )
}


