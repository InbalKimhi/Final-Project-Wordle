import './App.css';
import { Outlet } from 'react-router-dom';
import { NavBar } from './comp/NavBar';



export function App() {

  return (
    <>
    <NavBar/>
    <Outlet />
    </>
  );
}

export default App;
