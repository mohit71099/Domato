import Rescard from "./Rescard.js";
import  { useState, useEffect } from "react";
//import resList from "../utils/mockdata.js";
import { Link } from "react-router";
import Shimmer  from "./Shimmer.js";
import useOnlineStatus from "../utils/useOnlinestatus.js";


const Body = ()=>{
  const  [resturantList,setresturantList] = useState([]);
  const  [filterresturantList, setfilterresturantList] = useState([]);
  const  [Searchtext, setSearchtext] = useState("");


  useEffect(()=>{
    //console.log("UseEffect is called ");
    fetchData();
  },[]);

  const fetchData = async ()=>{
    const data =  await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.8045665&lng=86.2028754&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
       );
    const json  =  await data.json();
    //console.log(json);
    //console.log(json.data.cards[1]);

    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setresturantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilterresturantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


   const onlineStatus = useOnlineStatus();
   if(onlineStatus === false) return <h1> Looks like you are offline !! Please check your Internet connection </h1>

  //conditional rendering 
  if(resturantList.length === 0){ 
    return (<h3><Shimmer/></h3>);
  }

  return(
        <div className="body">

            <div className="filter">
               <div className="search-btn" >
                <input type="text" className="input-box" value={Searchtext} onChange={(e)=>{
                  setSearchtext(e.target.value);
                }}/>
                <button className="search-btn" onClick={()=>{
                  
                  const filtrest = resturantList.filter((res)=>{
                    return(res.info.name.toLowerCase().includes(Searchtext.toLowerCase()));
                  });
                  
                   setfilterresturantList(filtrest);
 
                }}>Search</button> 
               </div>
               <button className = "filter-btn" onClick={()=>{

                  const newList = resturantList.filter((res)=>{
                   return (res.info.avgRating > 4);
                 })
                 setfilterresturantList(newList);
               }}>
                  Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                 {filterresturantList.map((res)=>{
                    return (<Link key=   {res.info.id} to={"/restaurants/"+res.info.id}> <Rescard resData={res}/> </Link>);
                })
                }
                
            </div>
        </div>
    );
};

export default Body;