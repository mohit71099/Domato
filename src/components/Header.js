import { Logo_URL } from "../utils/constant";


const Header = ()=>{
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
            </ul>
            </div> 
        </div>
    );
}

export default Header; 