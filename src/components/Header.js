import { Logo_URL } from "../utils/constant";
import { useState } from "react";

const Header = ()=>{
    const [isLogin, setisLogin] = useState("Login");
    return(
      <div className ="header">
            <div className = "logo-container">
               <img  className ="logo" src={Logo_URL}/>
            </div>
           <div className ="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
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