import { Logo_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlinestatus";

const Header = ()=>{
    const [isLogin, setisLogin] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return(
      <div className ="header">
            <div className = "logo-container">
               <img  className ="logo" src={Logo_URL}/>
            </div>
           <div className ="nav-items">
            <ul>
                <li>
                    Online Status :{ onlineStatus ? "🟢" :"🔴" }
                </li>
                <li>
                    <Link to="./">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link></li>
                <li>
                    <Link to="/Contact">Contact us</Link>
                </li>
                <li>
                    <Link to="/Grocery">Grocery</Link>
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