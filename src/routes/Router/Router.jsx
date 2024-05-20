import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import About from "../../pages/About/About";
import Events from "../../pages/Events/Events";
import Speaker from "../../pages/Speaker/Speaker";
import Contact from "../../pages/Contact/Contact";
import Register from "../../pages/Register/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/events',
            element:<Events></Events>
            
        },
        {
            path:'/speaker',
            element:<Speaker></Speaker>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
    ]
  },
]);

export default router;
