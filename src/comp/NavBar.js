import {Link} from "react-router-dom";


export function NavBar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <Link class="navbar-brand" to={`game`}>Wordle</Link>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <Link class="nav-link active" aria-current="page" to={`/`}>Home</Link>
                {/* <Link class="nav-link" href="#">info</Link> */}
            </div>
            </div>
        </div>
        </nav>
        </>
    )
}