import { createBrowserRouter } from "react-router-dom";
import About from "../components/Pages/About";
import Appointment from "../components/Pages/Appointment/Appointment";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/about',
                element: <About></About>
            },
        ]
    }
])

export default router;