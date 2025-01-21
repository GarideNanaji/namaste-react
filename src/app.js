import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";



const Applayout = () => {
    return(
      <div className="app">
        <Header/>
        <Body/>
      </div>
    )
};





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);


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
