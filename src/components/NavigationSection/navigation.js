import React from "react";
import Logo from "./nasalogo.png"

const NavigationSection = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <img src={Logo} className="logo-img" alt="This is a nasa logo"></img>
            </div>
            <div className="nav-items">
                <div>
                    <a href="#">Another Picture</a>
                </div>
                <div>
                    <a href="#">Explanation</a>
                </div>
                <div>
                    <a href="#">More Info</a>
                </div>
            </div>
        </div>    
    )
}

export default NavigationSection;