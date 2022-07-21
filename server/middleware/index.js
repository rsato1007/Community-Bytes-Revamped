// Middleware index.js
const path = require("path");
// The main point of this section is to test how we can seperate middleware into it's own section.
// Eventually this file will act as a hub for all middleware.
module.exports = function(express, app){
    app.use(express.static(path.join(__dirname, "../..", "build")));
    app.use(express.static("public"));

    /* This middleware is what allows Express to serve React's files */
    // Documentation on res.sendFile: https://www.geeksforgeeks.org/express-js-res-sendfile-function/
    app.use((req, res, next) => {
        // You can read more about path.join here: https://nodejs.org/api/path.html
        // path ../../build/index.html
        // this will only work if you have a React build.
        res.sendFile(path.join(__dirname, "../..", "build", "index.html"));
    });
}