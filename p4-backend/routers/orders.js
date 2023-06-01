const express = require("express");
const router = express.Router();
const { auth, adminAuth } = require("../middleware/auth");
const {
  getAllCartItems,
  putCartItem,
  deleteCartItem,
  getOrderIncludingOrdereredItems,
  patchOrder,
  putOrderPayment,
  patchOrderPayment,
} = require("../controllers/orders");

// Cart items (ie before payment)
router.get("/orders/cart", auth, getAllCartItems);
router.put("/orders/cart", adminAuth, putCartItem);
router.delete("/orders/cart", adminAuth, deleteCartItem);

// Order items (ie after payment goes through)
router.get("/order/items", auth, getOrderIncludingOrdereredItems);
router.put("/orders/payment", auth, putOrderPayment);
// router.patch("/orders/payment/paid", auth, patchOrderPayment);

router.patch("/orders", auth, patchOrder);

module.exports = router;
