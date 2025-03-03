import { useState , useEffect } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
    //const [resInfo, setresInfo] = useState(null);
    const {resid} = useParams();

    const resInfo = useRestaurantMenu(resid);

     
    if(resInfo === null){
        return <Shimmer/>;
    }
    const {name, costForTwoMessage, cuisines, avgRating} = resInfo?.cards[2]?.card?.card?.info;

    const{itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    return(<div className="menu">
          <h1>{name}</h1>
          <p>
            {cuisines.join(", ")}
          </p>
          <p>
            {costForTwoMessage} - {avgRating} ratings
          </p>
          <div>
            {itemCards.map((item)=>{
                 return <li key={item?.card?.info?.id}> {item?.card?.info?.name} - Rs. {item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100}</li>
            })}
            </div>
          
    </div>);
};
    
export default RestaurantMenu;