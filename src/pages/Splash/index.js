import React from "react";

// Import React Components
import IntroBox from "../../components/IntroBox";
import TodaysRecipes from "../../components/TodaysRecipes";

// Renders the splash page for our website.
const Splash = () => {
    return (
        <div>
            <IntroBox />
            <TodaysRecipes />
        </div>
    )
}

export default Splash;