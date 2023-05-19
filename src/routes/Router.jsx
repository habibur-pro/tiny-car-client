import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blog from "../pages/Blog/Blog";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import PrivetRoute from "../Provider/PrivetRoute";
import MYToys from "../pages/MyToys/MYToys";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";

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
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'cars/:id',
                element: <PrivetRoute><ProductDetails></ProductDetails></PrivetRoute>
            },
            {
                path: 'my_toys',
                element: <MYToys></MYToys>
            },
            {
                path: 'add_toy',
                element: <AddToy></AddToy>
            },
            {
                path: 'allToys',
                element: <PrivetRoute><AllToys></AllToys></PrivetRoute>
            }
        ]
    }
])
export default router