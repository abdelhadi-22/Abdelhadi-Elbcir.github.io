import React from "react" ; 
import '../About.css';
function About(){
    const abouts = [
        "Name : El Bcir Abdelhadi",
        "Email : abdelhadi.elbcir@gmail.com",
        "Tele  : 06.09.76.33.88",
        "Contry : Morocco",
        "Activity : software engineer student"
    ]
    return <div className="container mt-2 mb-5">
        <div className="row">
            <div className="col-md-6 mt-5 text-center">
            <img src="img/1627317595568.png" width={"200px"} height={"200px"} class="rounded-circle  border-image" alt="Cinque Terre"/>
            </div>
            <div className="col-md-6 mt-5">
            <ul>
              { 
                abouts.map((about)=>{
                   return <li  style={{padding:"10px" , fontSize : "20px"}}>
                    <strong>
                    {about}
                    </strong>
                   </li>
                })
                
              }
              </ul>
            </div>
        </div>
        
    </div>
}

export default About;