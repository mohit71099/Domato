import { useEffect, useState } from "react";


const useRestaurantMenu = (resid)=>{
    const [restinfo, setresInfo] = useState(null);

    useEffect(()=>{
        fetchmenu();
    }, []);
    
    const fetchmenu = async ()=>{
        const response = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.8045665&lng=86.2028754&restaurantId="
        +resid+
        "&catalog_qa=undefined&submitAction=ENTER");
        const data = await response.json();
         console.log(data?.data);
         setresInfo(data?.data);
    }
    return restinfo;
}
export default useRestaurantMenu;

