import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Restaurant from "./Components/Restaurant";

const Grocery = lazy(() => import("./Components/Grocery"));
const AboutUs = lazy(() => import("./Components/AboutUs"));
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
                element: <Suspense fallback={<h1>Loading...</h1>}><AboutUs/></Suspense>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
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