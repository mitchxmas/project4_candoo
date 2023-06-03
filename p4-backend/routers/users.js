const express = require("express");
const router = express.Router();
const {
  seedUsers,
  getUsers,
  putUsers,
  deleteUser,
  patchUser,
  getOneUser,
} = require("../controllers/users");
const checkValid = require("../middleware/checkValid");
const { auth, adminAuth } = require("../middleware/auth");

router.get("/users", adminAuth, getUsers);
router.post("/users", auth, getOneUser);
router.put("/users", auth, checkValid, putUsers);
router.delete("/users", adminAuth, checkValid, deleteUser);

router.patch("/users", adminAuth, checkValid, patchUser);

router.get("/seed", seedUsers);

module.exports = router;
