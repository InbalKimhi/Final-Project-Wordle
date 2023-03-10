import { createContext } from "react";
import { boardobject } from "../comp/Board";
import { CurrentAttempt } from "../pages/Game";


export interface InterfaceAppContext{
    board: boardobject[][],
    setBoard: React.Dispatch<React.SetStateAction<boardobject[][]>>,
    currentAttempt: CurrentAttempt,
    setCurrentAttempt: React.Dispatch<CurrentAttempt>,
}

export const AppContext = createContext<InterfaceAppContext | null>(null);