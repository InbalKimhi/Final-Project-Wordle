import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../Providers/AppContext';

export function KeyBoard(){

const {board,setBoard,currentAttempt,setCurrentAttempt} = useContext(AppContext)

    function handleOnClick(e){
       const newboard = [...board]
       newboard[currentAttempt.rowAttempt][currentAttempt.cellAttempt] = e.target.innerText
       setBoard(newboard)

       const attempt = {...currentAttempt,rowAttempt : currentAttempt.rowAttempt, cellAttempt :currentAttempt.cellAttempt + 1}
       setCurrentAttempt(attempt)
       
       if(currentAttempt.cellAttempt === 4){
        const newAttempt = {...currentAttempt,rowAttempt : currentAttempt.rowAttempt + 1, cellAttempt : 0}
        setCurrentAttempt(newAttempt)
        alert('done')
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