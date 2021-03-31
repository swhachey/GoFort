const router = require("express").Router();
const destinationRoutes = require("./destinations");

// Destination routes
router.use("/cities", destinationRoutes);

module.exports = router;
