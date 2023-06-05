const express = require("express");
const router = express.Router();
const {
  seedUsers,
  getUsers,
  putUsers,
  deleteUser,
  patchUser,
  getOneUser,
  getUserPaymentMeans,
  addUserPaymentMeans,
} = require("../controllers/users");
const checkValid = require("../middleware/checkValid");
const { auth, adminAuth } = require("../middleware/auth");

router.get("/users", adminAuth, getUsers);
router.post("/user", auth, getOneUser);
router.put("/users", auth, checkValid, putUsers);
router.delete("/users", adminAuth, checkValid, deleteUser);

router.patch("/users", checkValid, patchUser);

router.get("/seed", seedUsers);

router.post("/user/paymentmeans", auth, getUserPaymentMeans);
router.put("/user/paymentmeans", auth, addUserPaymentMeans);

module.exports = router;
