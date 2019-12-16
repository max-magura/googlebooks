const router = require("express").Router();
const bookDbController = require("../../controllers/bookDbController");


// MATCHES with /api/book
router.route("/")
    .get(bookSearchRoutes.findAll)
    .post(bookSearchRoutes.create);


// MATCHES with /api/book/:id
router.route("/:id")
    .get(bookSearchRoutes.findById)
    .put(bookSearchRoutes.update)
    .delete(bookSearchRoutes.remove);

module.exports = router;
