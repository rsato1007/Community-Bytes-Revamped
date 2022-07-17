// Middleware index.js
// We're testing middleware to see how we can export it.
// The main point of this section is to test how we can seperate middleware into it's own section.
// Eventually this file will act as a hub for all middleware.
module.exports = function(app){
    app.use((req, res, next) => {
        console.log("Testing this shows up");
        next();
    });
}