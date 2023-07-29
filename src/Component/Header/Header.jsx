import React from "react";
import './Header.css';
import logo1 from "../../images/logo1.png"

function Header(){
    return(
        <div className="Header">
            <div className="logo">
            <a href="#">
                    <img src={logo1} alt="logo" />
                    <p>Government of Nepal</p>
                    </a>
            </div>
            <div className="nav-menu">
            <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Government</a></li>
          <li><a href="#">Education</a></li>
          <li><a href="#">Bussiness</a></li>
        </ul>
            </div>
        </div>
    )
}
export default Header