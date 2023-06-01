const express = require("express");
const router = express.Router();
const { auth, adminAuth } = require("../middleware/auth");
const {
  getAllCartItems,
  putCartItem,
  deleteCartItem,
  getOrderIncludingOrdereredItems,
} = require("../controllers/orders");

// Cart items (ie before payment)
router.get("/cart", auth, getAllCartItems);
router.put("/cart", adminAuth, putCartItem);
router.delete("/cart", adminAuth, deleteCartItem);

// Order items (ie after payment goes through)
router.get("/order/items", auth, getOrderIncludingOrdereredItems);

module.exports = router;
