import React from 'react';
import { Inputs } from '../comp/Inputs';
import { KeyBoard } from '../comp/KeyBoard';
import { AppContext } from '../Providers/AppContext';
import { Board } from '../comp/Board';
import { useState } from 'react';

export interface CurrentAttempt{
    rowAttempt : number,
    cellAttempt : number
}

export function Game(): JSX.Element{
    
    
    const [board,setBoard] = useState(Board)
    const [currentAttempt,setCurrentAttempt] = useState({rowAttempt: 0, cellAttempt: 0})
    const word : string = 'MONEY'
    
    const wordDict : Map<string,number> = new Map<string,number>()
    
    word.split('').forEach((letter : string) => {
        if(wordDict.get(letter)){
            wordDict.set(letter,wordDict.get(letter)!+ 1)
        }else{
            wordDict.set(letter,1)
        }
    });

    return(
    <AppContext.Provider value={{board,setBoard,currentAttempt,setCurrentAttempt,word,wordDict}}>
        <section className='containter'>
            <Inputs/>
            <KeyBoard/>   
        </section>
    </AppContext.Provider>
    )
}