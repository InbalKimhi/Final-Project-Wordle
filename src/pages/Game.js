import { Inputs } from '../comp/Inputs';
import { KeyBoard } from '../comp/KeyBoard';
import { AppContext } from '../Providers/AppContext';
import { Board } from '../comp/Board';
import { useState } from 'react';

export function Game(){
    
    const [board,setBoard] = useState(Board)
    const [currentAttempt,setCurrentAttempt] = useState({rowAttempt: 0, cellAttempt: 0})
    const word = 'EVENT'
    
    

    return(
    <AppContext.Provider value={{board,setBoard,currentAttempt,setCurrentAttempt,word}}>
        <section className='containter'>
            <Inputs/>
            <KeyBoard/>   
        </section>
    </AppContext.Provider>
    )
}