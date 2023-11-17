import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Restaurant from "./Components/Restaurant";

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <AboutUs/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurant/:resId",
                element: <Restaurant/>
            }
        ],
        errorElement: <Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={appRouter}/>
);