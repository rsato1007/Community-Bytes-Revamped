// index.js
// This file is our central server hub.
/* IMPORTED EXTERNAL MODULES */
const express = require('express');

/* IMPORTED INTERNAL MODULES */

/* INSTANCED MODULES */
// Create express instance
const app = express();

/* SERVER CONFIGURATIONS */
// For now, we'll set port to 8000 until we can deploy it.
const PORT = 8000;

/* ROUTES AND CONTROLLERS */
// The code below is a test to ensure our server works
app.get('/*', (req, res, next) => {
    console.log("Request received: ", req);
    res.send("Hello World");
});

/* REACT.JS CONNECTION */

/* SERVER LISTENER */
app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
});