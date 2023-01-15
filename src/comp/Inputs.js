import React, { useContext } from 'react';
import { AppContext } from '../Providers/AppContext';

export function Inputs(){
   const lstRow = [0,1,2,3];
   const lstcell = [0,1,2,3,4];
   const {board} = useContext(AppContext)

    return(
        <div className="inputs">

            {lstRow.map((rowNum)=>(
                <section>
                    {lstcell.map((cellNum)=>(
                        <input className={board[rowNum][cellNum].tileColor} maxLength={1} value={board[rowNum][cellNum].letter} readOnly ></input>
                    ))}
            </section>
            ))}
        </div>
    )
}