import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";




const Applayout = () => {
    return(
      <div className="app">
        <Header/>
        <Outlet/>
      </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },   
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            },
        ],
        errorElement:<Error/>
    }]
)



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);


// const jsxheading = <h1 className="header" tabIndex="1">This is from jsx content</h1>;

// const Title = () => 
//     (<h2>Namasthe React</h2>);


// const Headingcomponent = () => 
//     (
//     <div id= "container">
//     <Title/>  
//     {jsxheading}
//     {Title()}
//     <Title></TiApplayouttle>
//     <h1 id ="heading">This is from functional component</h1>
//     </div>  );
