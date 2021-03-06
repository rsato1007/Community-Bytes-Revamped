// routes index.js
// This file acts as hub for importing other route files.
// While not required, I do this for better application organization.
const router = require("express").Router();

// Temporary code to ensure exports work corrently.
router.use("/", (req, res, next) => {
    res.send("Hello World");
});

// Each route goes to it's respective file

// EXAMPLE CODE FOR FUTURE REFERENCE
// router.use("/posts", require("./posts"));

// Authentication Routes
// Users Routes
// Recipes Routes
// Ingredients Routes
// Reviews Routes

module.exports = router;