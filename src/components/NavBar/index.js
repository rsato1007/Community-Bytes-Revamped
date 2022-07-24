import React from "react";

import NavBarLinks from "./NavBarLinks";

// Renders our navigational bar component
const NavBar = () => {
    return (
        <div className="NavBar_Container">
            <div className="WebsiteLogo"></div>
            <NavBarLinks linksList={["Home", "About", "Find a Recipe", "Join Now", "Login", "Explore", "Create Recipe"]}/>
        </div>
    )
}

export default NavBar;