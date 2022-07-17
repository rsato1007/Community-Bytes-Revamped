// index.js
// This file is our central server hub.
/* IMPORTED EXTERNAL MODULES */
const express = require('express');

/* INSTANCED MODULES */
// Create express instance
const app = express();


/* SERVER CONFIGURATIONS */
// For now, we'll set port to 8000 until we can deploy it.
const PORT = 8000;

/* MIDDLEWARE */
// More likely than not, this will be altered as we add Middleware.
require("./middleware/index")(app);

/* ROUTES AND CONTROLLERS */
// The code below is a test to ensure our server works
app.get('/api', require("./routes/index"));

/* REACT.JS CONNECTION */

/* SERVER LISTENER */
app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
});