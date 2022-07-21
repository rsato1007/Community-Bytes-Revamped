// IMPORT EXTERNAL MODULES
import React from "react";
import {
    Route,
    Link,
    Routes
} from "react-router-dom";

// Imported Page Components
import Splash from '../../pages/Splash';
import NotFound from "../../pages/NotFound";

// This component handles all routes for the application.
const ClientRouter = () => {
    return (
        <Routes>
            <Route path ="/" element={<Splash/>} />
            <Route path ="/*" element={<NotFound />} />
        </Routes>
    )
}

export default ClientRouter;