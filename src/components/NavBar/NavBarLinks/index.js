import React from "react";

const NavBarLinks = ({ linksList }) => {
    return (
        <div>
            {linksList.map((link, index) => {
                return (
                    <div key={index}>
                        {link}
                    </div>
                )
            })}
        </div>
    )
}

export default NavBarLinks;