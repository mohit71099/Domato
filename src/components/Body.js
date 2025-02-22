import Rescard from "./Rescard.js";
import  { useState } from "react";
import resList from "../utils/mockdata.js";


const Body = ()=>{
  const  [resturantList,setresturantList] = useState(resList);
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
                <Rescard resData = {resturantList[2]}/>
                {
                  resturantList.map((res)=>{
                    return <Rescard key={res.info.id} resData={res}/>
                  })
                }
            </div>
        </div>
    );
};

export default Body;