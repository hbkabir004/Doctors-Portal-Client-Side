import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import About from "../components/Pages/About";
import Appointment from "../components/Pages/Appointment/Appointment";
import ContactUs from "../components/Pages/ContactUs";
import Dashboard from "../components/Pages/Dashboard";
import ErrorPage from "../components/Pages/ErrorPage";
import Home from "../components/Pages/Home/Home";
import Reviews from "../components/Pages/Reviews";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

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
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },
        ],
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
])

export default router;