import { useContext} from 'react';
import { AppContext } from '../Providers/AppContext';
import { checkWord, checkWordColor } from '../gameLogic/wordLogic';

export function KeyBoard(){

const {board,setBoard,currentAttempt,setCurrentAttempt,word,wordDict} = useContext(AppContext)
    
    const keysDict = new Map()
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(letter => {
            keysDict.set(letter,'')
    });

    function handleOnClick(e){
       const newboard = [...board]
       newboard[currentAttempt.rowAttempt][currentAttempt.cellAttempt].letter = e.target.innerText
       setBoard(newboard);

       const attempt = {...currentAttempt,rowAttempt : currentAttempt.rowAttempt, cellAttempt :currentAttempt.cellAttempt + 1};
       setCurrentAttempt(attempt);
       
       if(currentAttempt.cellAttempt === 4){
        
        let wordToCheck = ''
        board[currentAttempt.rowAttempt].forEach( object => {
            wordToCheck += object.letter
        });

        checkWordColor(wordToCheck,word,wordDict,currentAttempt,board)
        checkWord(wordToCheck,word,currentAttempt)

        const newAttempt = {...currentAttempt,rowAttempt : currentAttempt.rowAttempt + 1, cellAttempt : 0};
        setCurrentAttempt(newAttempt);
        console.log('done');
       }
       
    }

    function colorForButton(keyLetter){
        let buttonColor = ''
        board.forEach((row)=>{
            row.forEach((obj)=>{
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