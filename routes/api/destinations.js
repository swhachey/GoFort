const router = require("express").Router();
const destinationController = require("../../controllers/destinationController");

// Matches with "/api/destination"
router.route("/")
  .get(destinationController.findAll)
  .post(destinationController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(destinationController.findById)
  .put(destinationController.update)
  .delete(destinationController.remove);

module.exports = router;
