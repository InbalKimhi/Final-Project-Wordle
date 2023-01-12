import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../Providers/AppContext';

export function KeyBoard(){

const {board,setBoard,currentAttempt,setCurrentAttempt,word,wordDict} = useContext(AppContext)

function checkWord(){
    if(currentAttempt.cellAttempt === 4){
        
        let wordToCheck = ''
        board[currentAttempt.rowAttempt].forEach( object => {
            wordToCheck += object.letter
        });

        console.log(wordDict)
            
        for (let i = 0; i < 5; i++){
            console.log(word[i], 'check :',wordToCheck[i])
            if(wordToCheck[i] === word[i]){
                
                wordDict.set(word[i], wordDict.get(word[i]) - 1 )
                board[currentAttempt.rowAttempt][i].tileColor = 'green'
        }}    

        for (let i = 0; i < 5; i++){   
            if(word.includes(wordToCheck[i])){
                
                if(wordDict.get(wordToCheck[i]) <= 0 && board[currentAttempt.rowAttempt][i].tileColor === ''){
                    board[currentAttempt.rowAttempt][i].tileColor = 'gray'

                }else if(board[currentAttempt.rowAttempt][i].tileColor === ''){
                    
                    wordDict.set(wordToCheck[i], wordDict.get(wordToCheck[i]) - 1 )
                    board[currentAttempt.rowAttempt][i].tileColor = 'yellow'
                }

            }else{

                board[currentAttempt.rowAttempt][i].tileColor = 'gray'
            }
        }
        
    }
   }


    function handleOnClick(e){
       const newboard = [...board]
       newboard[currentAttempt.rowAttempt][currentAttempt.cellAttempt].letter = e.target.innerText
       setBoard(newboard);

       const attempt = {...currentAttempt,rowAttempt : currentAttempt.rowAttempt, cellAttempt :currentAttempt.cellAttempt + 1};
       setCurrentAttempt(attempt);
       
       if(currentAttempt.cellAttempt === 4){
        checkWord()
        const newAttempt = {...currentAttempt,rowAttempt : currentAttempt.rowAttempt + 1, cellAttempt : 0};
        setCurrentAttempt(newAttempt);
        console.log('done');
       }
       
    }

    return(
        <div className="keyboard">
            <section id="row1">

                <button onClick={handleOnClick}>Q</button>
                <button onClick={handleOnClick}>W</button>
                <button onClick={handleOnClick}>E</button>
                <button onClick={handleOnClick}>R</button>
                <button onClick={handleOnClick}>T</button>
                <button onClick={handleOnClick}>Y</button>
                <button onClick={handleOnClick}>U</button>
                <button onClick={handleOnClick}>I</button>
                <button onClick={handleOnClick}>O</button>
                <button onClick={handleOnClick}>P</button>

            </section>
            <section id="row2" >
                
                <button onClick={handleOnClick}>A</button>
                <button onClick={handleOnClick}>S</button>
                <button onClick={handleOnClick}>D</button>
                <button onClick={handleOnClick}>F</button>
                <button onClick={handleOnClick}>G</button>
                <button onClick={handleOnClick}>H</button>
                <button onClick={handleOnClick}>J</button>
                <button onClick={handleOnClick}>K</button>
                <button onClick={handleOnClick}>L</button>

            </section>
            <section id="row3">

                <button onClick={handleOnClick}>ENTER</button>
                <button onClick={handleOnClick}>Z</button>
                <button onClick={handleOnClick}>X</button>
                <button onClick={handleOnClick}>C</button>
                <button onClick={handleOnClick}>V</button>
                <button onClick={handleOnClick}>B</button>
                <button onClick={handleOnClick}>N</button>
                <button onClick={handleOnClick}>M</button>
                <button onClick={handleOnClick}>DEL</button>

            </section>
        </div>
    )
}