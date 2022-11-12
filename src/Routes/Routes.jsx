import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Auth/Login";
import Home from "../components/Pages/Home/Home";
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
        ]
    }
])

export default router;