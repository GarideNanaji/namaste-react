import User from "./User";
import UserClass from "./UserClass";

import React from "react";
// const About =(() =>{
//     return (
//         <div>
//             <h1>About Page</h1>
//             <h2>This is Namasthe react About page</h2>
//             <User userName ={"Garide Nanaji"}/>
//             <UserClass name={"Nanaji"}/>
//         </div>
//     )
// })
class About extends React.Component{
   constructor(props){
    super(props);
    console.log("parent constructor");
   }

   componentDidMount(){
    console.log("parent CDM");
   }

   render(){
    console.log("parent render");
    return (
                <div>
                    <h1>About Page</h1>
                    <h2>This is Namasthe react About page</h2>
                    <User userName ={"Garide Nanaji"}/>
                    <UserClass name={"Nanaji"}/>
                </div>
            )
        }
}



export default About;