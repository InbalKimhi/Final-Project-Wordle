import { boardobject } from "../comp/Board";
import { CurrentAttempt } from "../pages/Game";

export async function checkWordColor(wordToCheck : string, currentAttempt : CurrentAttempt, board : boardobject[][]){

    const response = await fetch('http://localhost:3333/word/check', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userWord : wordToCheck})
      });
      const result = await response.json() ; 
      
      for (let i = 0; i < 5; i++){
        board[currentAttempt.rowAttempt][i].tileColor = result.colorTileArray[i]
      }

      if(result.correctGuess){
        console.log('sucsess')
      }else if(currentAttempt.rowAttempt === 3){
        console.log('fail')
      }


    }