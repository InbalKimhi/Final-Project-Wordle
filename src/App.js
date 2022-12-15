import './App.css';
import { Inputs } from './comp/Inputs';
import { KeyBoard } from './comp/KeyBoard';
import { Board } from './comp/Board';
import { useState } from 'react';
import { AppContext } from './Providers/AppContext';



function App() {
  const [board,setBoard] = useState(Board)
  const [currentAttempt,setCurrentAttempt] = useState({rowAttempt: 0, cellAttempt: 0})
  return (
    <AppContext.Provider value={{board,setBoard,currentAttempt,setCurrentAttempt}}>
    <section className='containter'>
    <Inputs/>
    <KeyBoard/>   
    </section>
    </AppContext.Provider>
  );
}

export default App;
