import React from "react";
import "./Home.css";
import Mountain2 from "../../images/Mountain2.jpg"
function Home(){
    return(
        <>
        <div className="wrapper">
            <img src={Mountain2} alt="Mountain2" className="wrapp-img"/>
            {/* <p>MT.Everest</p> */}
            <div className="wrapper-content">
                <h1>Mount Everest</h1>
                <p>Mount Everest is the highest of the Himalayan mountains, and at 8,850 meters (29,035 feet)—is considered the highest point on Earth.</p>
            </div>
        </div>
        </>
    )
}
export default Home