import React from "react";



class UserClass extends React.Component{
     constructor(props){
        super(props);
        

        //declaring state variable in class-based Components
        this.state = {
            userInfo:{
                name: " ",
                location: " ",
                avatar_url: " ",
                email:" ",
            }
        };
        
        
     }
     async componentDidMount(){
           const data = await fetch("https://api.github.com/users/mohit71099");
           const json = await data.json();
           console.log(json);
           this.setState({
            userInfo : json,
           })
     }
     
     
    render(){
        
        
        const {name, location, avatar_url, email} = this?.state?.userInfo
      
        return(
            <div className="user-card">
                <img src={avatar_url} className="img-card"></img>
          <h3>Name: {name}</h3>
          <h4>Location: {location}</h4>
          <h4>Contact us: {email} </h4>
          </div>  
        );
    }
}
export default UserClass; 