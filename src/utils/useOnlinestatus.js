import { useEffect, useState} from "react";


const useOnlineStatus=()=>{
     
    const [OnlineStatus, setOnlineStatus] = useState(true);
  //check if online , it should call one time only that why we are using useeffect
    useEffect(()=>{
      window.addEventListener("offline", ()=>{
               setOnlineStatus(false);
      });
      window.addEventListener("online",()=>{
             setOnlineStatus(true);
      });

    },[]);

    
    return OnlineStatus;
}
export default useOnlineStatus 
