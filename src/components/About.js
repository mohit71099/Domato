import User from "./User";
import UserClass from "./UserClass";
import React from "react";




const About = ()=>{
    return(
        <div>
            <h1>About Us</h1>
            <h3>This is Domato you can order from here only</h3>
            {/* <User name={"Mohit (function)"} location={"Jamshedpur (function)"}/> */}
            <UserClass name={"Mohit (Classes)"} location={"Jamshedpur (classes)"}/>
        </div>
    );
};

export default About;