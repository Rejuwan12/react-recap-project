import { createBrowserRouter } from "react-router";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import AppliedJob from "../pages/AppliedJob/AppliedJob";
import Blog from "../pages/Blog/Blog";
import Statistics from "../pages/Statistics/Statistics";


export const router = createBrowserRouter([
      {
        path:'/',
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/applied-job',
                element: <AppliedJob/>
            },
            {
                path:'/blogs',
                element: <Blog/>
            },
            {
                path:'/statistics',
                element: <Statistics/>
            },
        ]
      }
])