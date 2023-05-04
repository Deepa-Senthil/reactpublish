import React from "react";
function Home(props) {
    return (
        <>
            <h1>From Home:</h1>
             <p>Name:{props.userDetails.userName}</p>
             {/* <p> Age:{props.userDetails.age}</p> */}
             <p>Gender:{props.userDetails.gender}</p>
             <p>Location:{props. userDetails.location}</p>
        
    

        </>
     )
}
 export default Home