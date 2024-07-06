import React from 'react'
import ReactDomClient from 'react-dom/client'
import App from './components/App'
import {createBrowserRouter, RouterProvider} from 'react-router-dom' 
import {Suspense} from 'react'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Suspense fallback={"Loading"}><App /></Suspense>,
    },
    {
      path: "/about",
      element: <h1>About</h1>,
    },
  ]);

ReactDomClient.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}/>
);

