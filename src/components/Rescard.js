import { CDN_URL } from "../utils/constant";
import resList from "../utils/mockdata.js";


const Rescard = (props) => {
  const {resData} =  props;
  const {cloudinaryImageId, name, cuisines, avgRating ,costForTwo} = resData?.info;
  const {deliveryTime} = resData?.info?.sla;
    return(
     
        <div className="res-card">
          <img className="res-logo" src={CDN_URL+cloudinaryImageId }></img>
          <h3> {name} </h3>   
          <h4>{cuisines.join(",")}</h4>    
          <h4>{avgRating}</h4>
          <h4>{deliveryTime}</h4>
          <h4>{costForTwo}</h4>
        </div>
    );
};

export default Rescard;