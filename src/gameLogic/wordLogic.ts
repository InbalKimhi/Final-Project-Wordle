import { CurrentAttempt } from "../pages/Game"
import { boardobject } from "../comp/Board"

export function checkWordColor(wordToCheck : string ,word : string ,wordDict : Map<string,number> ,currentAttempt : CurrentAttempt,board : boardobject[][]){

    for (let i = 0; i < 5; i++){
        
        if(wordToCheck[i] === word[i]){
            
            wordDict.set(word[i], wordDict.get(word[i])! - 1 )
            board[currentAttempt.rowAttempt][i].tileColor = 'green'
    }}    

    for (let i = 0; i < 5; i++){   
        if(word.includes(wordToCheck[i])){
            
            if(wordDict.get(wordToCheck[i])! <= 0 && board[currentAttempt.rowAttempt][i].tileColor === ''){
                
                board[currentAttempt.rowAttempt][i].tileColor = 'gray'

            }else if(board[currentAttempt.rowAttempt][i].tileColor === ''){
                
                wordDict.set(wordToCheck[i], wordDict.get(wordToCheck[i])! - 1 )
                board[currentAttempt.rowAttempt][i].tileColor = 'yellow'
            }

        }else{

            board[currentAttempt.rowAttempt][i].tileColor = 'gray'
        }
    }
    
}

export function checkWord(wordToCheck : string ,word : string ,currentAttempt : CurrentAttempt){

    if(currentAttempt.rowAttempt === 3 && word !== wordToCheck ){
        console.log('failed')
        
    }else if(wordToCheck === word){
        console.log('sucsses')
    }
}
