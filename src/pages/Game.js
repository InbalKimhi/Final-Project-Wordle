import { Inputs } from '../comp/Inputs';
import { KeyBoard } from '../comp/KeyBoard';
import { AppContext } from '../Providers/AppContext';
import { Board } from '../comp/Board';
import { useState } from 'react';

export function Game(){
    
    const [board,setBoard] = useState(Board)
    const [currentAttempt,setCurrentAttempt] = useState({rowAttempt: 0, cellAttempt: 0})
    const word = 'MONEY'
    
    const wordDict = new Map()
    
    word.split('').forEach(letter => {
        if(wordDict.get(letter)){
            wordDict.set(letter,wordDict.get(letter)+ 1)
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