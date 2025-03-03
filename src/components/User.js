import { useState , useEffect } from "react";

const User = (props)=>{
    const{name,location} = props; 
    const [count] = useState("1");
   
    useEffect(()=>{

    },[count])


    return <div className = "user-card">
        <h1>{count}</h1>
          <h3>Name: {name}</h3>
          <h4>Location: {location} </h4>
          <h4>Contact us: </h4>

    </div>
}
export default User;