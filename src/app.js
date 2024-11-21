import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider, Link } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Invoice from "./components/Invoice";
import Product from "./components/Product";
import Customers from "./components/Customers";


const AppLayout = () => {
    return (
      <div className="app">
        <Header />
        <Outlet />
      </div>
    );
  };
  

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/invoicePage",
                element: <Invoice />
            },
            {
                path: "/productPage",
                element: <Product />
            },
            {
                path: "/customerPage",
                element: <Customers />
            }
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);