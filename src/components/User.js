import { useState } from "react";

const User = (props) => {
    const [count]=useState(0);
    const [count1]=useState(1);
    return(
        <div className="user-card">
             <h1>count={count}</h1>  
             <h1>count1={count1}</h1> 
            <h1>Name:-{props.userName}</h1>
            <h2>This is user functional component</h2>
        </div>
    )
}

export default User;