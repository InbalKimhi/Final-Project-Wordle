import React from 'react';
import { useContext} from 'react';
import { AppContext, InterfaceAppContext } from '../Providers/AppContext';
import { checkWordColor } from '../gameLogic/wordLogic';
import { boardobject } from './Board';
import { CurrentAttempt } from '../pages/Game';

export function KeyBoard(): JSX.Element{

const {board,setBoard,currentAttempt,setCurrentAttempt} = useContext(AppContext) as InterfaceAppContext
    
    const keysDict : Map<string,string> = new Map()
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach((letter : string) => {
            keysDict.set(letter,'')
    });

    async function handleOnClick(e :React.MouseEvent<HTMLButtonElement>){
       const newboard: boardobject[][] = [...board]
       newboard[currentAttempt.rowAttempt][currentAttempt.cellAttempt].letter = (e.target as HTMLButtonElement).innerText
       setBoard(newboard);

       const attempt : CurrentAttempt = {...currentAttempt,rowAttempt : currentAttempt.rowAttempt, cellAttempt :currentAttempt.cellAttempt + 1};
       setCurrentAttempt(attempt);
       
       if(currentAttempt.cellAttempt === 4){
        
        let wordToCheck : string = ''
        board[currentAttempt.rowAttempt].forEach( (object : boardobject) => {
            wordToCheck += object.letter
        });

        await checkWordColor(wordToCheck,currentAttempt,board)

        const newAttempt : CurrentAttempt = {...currentAttempt,rowAttempt : currentAttempt.rowAttempt + 1, cellAttempt : 0};
        setCurrentAttempt(newAttempt);
        console.log('done');
       }
       
    }

    function colorForButton(keyLetter : string) : string{
        let buttonColor : string = ''
        board.forEach((row : boardobject[])=>{
            row.forEach((obj :boardobject)=>{
                
                if(obj.letter === keyLetter){
                    if(obj.tileColor === 'green'){
                        
                        buttonColor = '#c0f3bd' 
                        keysDict.set(keyLetter,'green')
                    
                    }else if(obj.tileColor === 'yellow' && ( keysDict.get(keyLetter) === '' || keysDict.get(keyLetter) === 'gray') ){
                        
                        buttonColor = '#fcf3c3'
                        keysDict.set(keyLetter,'yellow')

                    }else if(obj.tileColor === 'gray' && keysDict.get(keyLetter) === ''){
                        
                        keysDict.set(keyLetter,'gray')
                        buttonColor = 'rgb(202, 202, 202)'
                    }     
                }
            })
        })
        return buttonColor
    }

    return(
        <div className="keyboard">
            <section id="row1">

                {['Q','W','E','R','T','Y','U','I','O','P'].map(
                    (letter) => (
                        <button style={ {backgroundColor : colorForButton(letter)}} onClick={handleOnClick} key={letter}>{letter}</button>
                    )
                )}

            </section>
            <section id="row2" >

                {['A','S','D','F','G','H','J','K','L'].map(
                    (letter) => (
                        <button style={ {backgroundColor : colorForButton(letter)}} onClick={handleOnClick} key={letter}>{letter}</button>
                    )
                )}

            </section>
            <section id="row3">

                <button onClick={handleOnClick}>ENTER</button>
                {['Z','X','C','V','B','N','M'].map(
                (letter) => (
                    <button style={ {backgroundColor : colorForButton(letter)}} onClick={handleOnClick} key={letter}>{letter}</button>
                )
                )}
                <button onClick={handleOnClick}>DEL</button>

            </section>
        </div>
    )
}