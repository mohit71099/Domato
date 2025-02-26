import { Logo_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router";

const Header = ()=>{
    const [isLogin, setisLogin] = useState("Login");
    return(
      <div className ="header">
            <div className = "logo-container">
               <img  className ="logo" src={Logo_URL}/>
            </div>
           <div className ="nav-items">
            <ul>
                <li>
                    <Link to="./">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link></li>
                <li>
                    <Link to="/Contact">Contact us</Link>
                </li>
                <li>Cart</li>
              <li> <button className = "login-btn" 
                onClick={()=>{
                    if(isLogin == "Login"){
                        setisLogin("Logout");
                    }else{
                        setisLogin("Login");
                    }
                }}>{isLogin}</button></li> 
            </ul>
            </div> 
        </div>
    );
}

export default Header; 