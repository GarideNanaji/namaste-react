import React from "react";
class UserClass extends React.Component{

    constructor(props){
        super(props); //
        //console.log("child constructor");
         
        this.state = {
            userInfo:{
                login: "Dummy",
               
            }
        }

    }
    async componentDidMount(){
    //     this.timer = setInterval(() => {
    //         console.log('Timerr')
    // },1000);
       // console.log("child CDM");
        const data = await fetch("https://api.github.com/users/GarideNanaji");
        const json = await data.json();
        this.setState({
            userInfo:json
        });
        console.log(json);
    }

    componentDidUpdate(){
       // console.log(" componentDidUpdate");
    }

    componentWillUnmount(){
        //It will clear the timer which are placed in componentDidMount() 
       // clearInterval(this.timer);
        console.log(" componentWillUnmount will show ajust after unmounting");
    }


    render(){
        const {login,avatar_url} = this.state.userInfo;
        //debugger;
        const {count} = this.state;
       // console.log("child render");

        return(
            <div className="user-card">
            {/* <h1>count={count}</h1>  
            <button onClick={() =>{
                this.setState({
                    count:this.state.count+1
                });
            }
            }>Increase Count</button>      */}
            <img src={avatar_url}/>
            <h1>Name:-{login}</h1>
            
        </div>
        )
    }

}
export default UserClass;