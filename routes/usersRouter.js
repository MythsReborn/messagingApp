const { Router } = require("express");

const router = Router();

const usersController = require("../controllers/usersController");
const requireAuth = require("../middleware/authMiddleware");

router.get("/", requireAuth, usersController.getUsers);

module.exports = router;
