const express = require("express");
const router = express.Router();

const checkValid = require("../middleware/checkValid");
const {
  register,
  login,
  getAllAuthenticatedUsers,
  getAuthUser,
} = require("../controllers/auth");

router.put("/register", checkValid, register);
router.post("/login", checkValid, login);
router.get("/users", checkValid, getAllAuthenticatedUsers);
router.post("/user", checkValid, getAuthUser);

module.exports = router;
