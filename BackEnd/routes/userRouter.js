const Router = require("express");
const {
  registration,
  login,
  checkUser,
} = require("../controllers/userController.js");

const router = new Router();

router.post("/registration", registration);
router.post("/login", login);
router.get("/auth", checkUser);

module.exports = router;
