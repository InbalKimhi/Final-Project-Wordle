import { createContext } from "react";

export interface User{
    username: string | undefined,
    email : string | undefined,
    password : string | undefined; 
}

export interface InterfaceModalContext{
    handleClose: () => void,
    handleShow: () => void,
    show: boolean,
    handleShowLogin: () => void,
    handleCloseLogin: () => void,
    showLogin: boolean,
    user: null | User,
    setuser: React.Dispatch<React.SetStateAction<null | User>>;
}
export const ModalContext = createContext<null | InterfaceModalContext>(null);