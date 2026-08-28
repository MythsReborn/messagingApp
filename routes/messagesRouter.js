const { Router } = require("express");

const router = Router();

const messagesController = require("../controllers/messagesController");
const requireAuth = require("../middleware/authMiddleware");

router.get(
    "/:userId",
    requireAuth,
    messagesController.getMessages
);

router.post(
    "/:userId",
    requireAuth,
    messagesController.sendMessage
);

module.exports = router;