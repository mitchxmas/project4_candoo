const express = require("express");
const router = express.Router();

const checkValid = require("../middleware/checkValid");
const {
  register,
  login,
  getAllAuthenticatedUsers,
} = require("../controllers/auth");

router.put("/register", checkValid, register);
router.post("/login", checkValid, login);
router.get("", checkValid, getAllAuthenticatedUsers);

module.exports = router;
