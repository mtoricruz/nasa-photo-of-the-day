import React from "react";
import Logo from "./nasalogo.png"
import styled from "styled-components"

const LogoImg = styled.img`
    /* align-content: center; */
    border: 1px solid black;
    width: 130px;
    height: 115px;
`

const NavContainer = styled.div` 
    display: flex;
    margin: 0.5%;
    border: 1px solid red;
    width: 70%;
    height: 30%;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 15%;
`

const NavItems = styled.div`
    width: 30%;
    height: 40px;
    a {
        text-decoration: none;
        margin: 1% 4%;
    }
    border: 1px solid blue;
`

const NavigationSection = () => {
    return (
        <NavContainer className="nav-container">
            <div className="logo">
                <LogoImg src={Logo} className="logo-img" alt="This is a nasa logo"/>
            </div>
            <NavItems className="nav-items">
                <a href="#">Another Picture</a>
                <a href="#">Explanation</a>
                <a href="#">More Info</a>
            </NavItems>
        </NavContainer>    
    )
}

export default NavigationSection;