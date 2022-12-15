import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Game } from "./pages/Game";
import { Home } from "./pages/Home";

export const router = createBrowserRouter([
    {
      element: <App/>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'game',
          element: <Game/>
        },
      ]
    },
  
  ]);
  