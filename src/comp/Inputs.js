import React, { useContext } from 'react';
import { AppContext } from '../Providers/AppContext';

export function Inputs(){
   const lstRow = [0,1,2,3];
   const lstcell = [0,1,2,3,4];
   const {board,currentAttempt,word} = useContext(AppContext)

   function checkWordSetColor(){
    // console.log('func called')

    // if (currentAttempt.cellAttempt === 4){

    //     const wordToCheack = board[currentAttempt.rowAttempt].join('').toUpperCase()
        
    //     for (let index = 0; index < wordToCheack.length; index++){

    //         if(wordToCheack.charAt(index) === word.charAt(index)){
    //             console.log('same char')
    //             return 'correctTile'
    //         }
    //     }
    // }
    return ''
   }

    return(
        <div className="inputs">

            {lstRow.map((rowNum)=>(
                <section>
                    {lstcell.map((cellNum)=>(
                        <input className={checkWordSetColor()} maxLength={1} value={board[rowNum][cellNum]} readOnly ></input>
                    ))}
            </section>
            ))}
        </div>
    )
}