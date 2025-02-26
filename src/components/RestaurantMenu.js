import { useState,useEffect } from "react";


const RestaurantMenu = ()=>{
    
    const [resInfo, setresInfo] = useState(null);
 
     useEffect(()=>{
          fetchMenu();
     },[]);
 
     const fetchMenu = async ()=>{
 
         const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.8045665&lng=86.2028754&restaurantId=127034&catalog_qa=undefined&submitAction=ENTER"); 
         const response = await data.json();
 
         //console.log(json);
        // console.log(json?.data);
        // console.log(json?.data?.cards[2]?.card?.card?.info);
        setresInfo(response);
        
        console.log(resInfo)
     };
      
       // const {name,costForTwoMessage, avgRating} = resInfo?.cards[2]?.card?.card?.info;
        
     return (
        
       <h1>Mohit

       </h1>
      );
 };

export default RestaurantMenu;