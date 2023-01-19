import React, { useContext } from 'react';
import { AppContext, InterfaceAppContext } from '../Providers/AppContext';

export function Inputs() :JSX.Element{
   const lstRow : number[] = [0,1,2,3];
   const lstcell : number[]  = [0,1,2,3,4];
   const {board} = useContext(AppContext) as InterfaceAppContext

    return(
        <div className="inputs">

            {lstRow.map((rowNum : number)=>(
                <section key={rowNum}>
                    {lstcell.map((cellNum : number)=>(
                        <input className={board[rowNum][cellNum].tileColor} value={board[rowNum][cellNum].letter} key={`key-${rowNum}-${cellNum}`} readOnly ></input>
                    ))}
            </section>
            ))}
        </div>
    )
}