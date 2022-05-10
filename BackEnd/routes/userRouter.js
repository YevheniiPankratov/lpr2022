const Router = require("express");
const {
  registration,
  login,
  checkUser,
} = require("../controllers/userController.js");
const authMiddleware = require("../middleware/authMiddleware");

const router = new Router();

router.post("/registration", registration);
router.post("/login", login);
router.get("/auth", authMiddleware, checkUser);

module.exports = router;
