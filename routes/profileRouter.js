const { Router } = require("express");

const router = Router();

const profileController = require("../controllers/profileController");
const requireAuth = require("../middleware/authMiddleware");

router.get("/", requireAuth, profileController.getProfile);

router.get(
    "/edit",
    requireAuth,
    profileController.editProfileGet
);

router.post(
    "/edit",
    requireAuth,
    profileController.editProfilePost
);

module.exports = router;