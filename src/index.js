import React, {  children } from "react";
import ReactDOM from "react-dom";
import App from './App'
import Home from "./Parent/Home";
import About from "./Parent/About";
import Contact from "./Parent/Contct";
import Service from "./Parent/Service";
import Spaangular from "./Parent/Spaangular";
import Spareact from "./Parent/Spareact";
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[  
      {
        path: "/home",
        element: <Home></Home>
      },
    
      {
        path: "/about",
        element: <About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/Service",
        element:<Service></Service>,
             children:[
             {
              path:"/Service/react",
              element:<Spareact></Spareact>
              },
              {
                path:"/Service/angular",
              element:<Spaangular></Spaangular>
              }
            ]
      
      }
    ]
  }

]);
const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(
<RouterProvider router={router}></RouterProvider>
)
reportWebVitals();