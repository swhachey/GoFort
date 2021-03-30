const router = require("express").Router();
const deistinationRoutes = require("./destinations");

// Book routes
router.use("/destinations", deistinationRoutes);

module.exports = router;
