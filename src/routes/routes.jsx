import { createBrowserRouter } from "react-router";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";


export const router = createBrowserRouter([
      {
        path:'/',
        element:<MainLayout/>,
        children: [
            {
                path:'/',
                element: <Home/>
            }
        ]
      }
])