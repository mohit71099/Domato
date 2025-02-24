import Rescard from "./Rescard.js";
import  { useState, useEffect } from "react";
//import resList from "../utils/mockdata.js";
import Shimmer  from "./Shimmer.js";


const Body = ()=>{
  const  [resturantList,setresturantList] = useState([]);

  useEffect(()=>{
    console.log("UseEffect is called ");
    fetchData();
  },[]);

  const fetchData = async ()=>{
    const data =  await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.8045665&lng=86.2028754&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
       );
    const json  =  await data.json();
    console.log(json);
    console.log(json.data.cards[1]);

    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setresturantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


  //conditional rendering 
  if(resturantList.length === 0){
    return (<h3><Shimmer/></h3>);
  }

  return(
        <div className="body">

            <div className="filter">
               <button className = "filter-btn" onClick={()=>{

                  const newList = resturantList.filter((res)=>{
                   return (res.info.avgRating > 4);
                 })
                 setresturantList(newList);
               }}>
                  Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                 
                 
                 {resturantList.map((res)=>{
                  return <Rescard key={res.info.id} resData={res}/>
                })
                }
                
            </div>
        </div>
    );
};

export default Body;