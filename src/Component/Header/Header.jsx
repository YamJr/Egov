import React from "react";
import './Header.css';

function Header(){
    return(
        <>
        <div className="Header">
            <div className="logo">
                    <p>Logo</p>
            </div>
            <div className="nav-menu">
            <ul>
          {/* <li><a href="#">Home</a></li> */}
          <li><a href="#t">Trending</a></li>
          <li><a href="#">Education</a></li>
          <li><a href="#">Government</a></li>
          <li><a href="#">Bussiness</a></li>
        </ul>
            </div>
        </div>
        </>
    )
}
export default Header