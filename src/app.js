import React from "react";
import ReactDOM from "react-dom/client";
import Header  from "./components/Header.js";
import Body  from "./components/Body.js";
import About  from "./components/About.js";
import Contact from "./components/Contactus.js";
import Error from "./components/Error.js";
import { createBrowserRouter, RouterProvider } from "react-router"; 


const Applayout = () => { 
    
    return(
      <div className="app">
      <Header/>
      <Body/>
      </div>
    );
}
 const appRouter = createBrowserRouter([
   {
     path:"/",
     element: <Applayout />,
     errorElement:<Error />
   },
   {
     path: "/about",
     element: <About />
   },
   {
    path: "/contact",
    element: <Contact />
   }
 ]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);  
