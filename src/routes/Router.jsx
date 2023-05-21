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
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: 'toys/:id',
                element: <PrivetRoute><ProductDetails></ProductDetails></PrivetRoute>
            },
            {
                path: 'my_toys',
                element: <PrivetRoute><MYToys></MYToys></PrivetRoute>
            },
            {
                path: 'add_toy',
                element: <PrivetRoute><AddToy></AddToy></PrivetRoute>
            },
            {
                path: 'allToys',
                element: <PrivetRoute><AllToys></AllToys></PrivetRoute>
            },
            {
                path: 'toy/update/:id',
                element: <PrivetRoute><UpdateToy></UpdateToy></PrivetRoute>
            }
        ]
    }
])
export default router