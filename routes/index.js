const router = require('express').Router();
const apiRoutes = require('./api');
const path = require("path");

// API Routes
router.use("/api", apiRoutes);

// Send every other request to the React app
// router.use(function (req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

router.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;