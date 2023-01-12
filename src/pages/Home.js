import { useContext } from "react"
import { ModalContext } from '../Providers/ModalContext';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

export function Home(){

    const {user} = useContext(ModalContext)
    
    const navigation = useNavigate()
    
    function handleNav(){
        navigation("/game");
    }

    return(
        <>
        {user ?
        <>
        <div className="text-center" id="center">
            <h1 className="d-flex justify-content-center">WELCOME {user.username.toUpperCase()}</h1>
            <Button onClick={handleNav} variant="outline-secondary">To The Game</Button> 
        </div>
        </> : 
        <>
        <div className="text-center" id="center">
            <h1 className="d-flex justify-content-center">WELCOME GUEST</h1>
            <Button onClick={handleNav} variant="outline-secondary">To The Game</Button> 
        </div>
         </>
         }
        </>
    )
}