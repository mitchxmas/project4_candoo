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
  createUserCart,
  getCartIncludingCartItems,
} = require("../controllers/orders");

// Generate an empty cart when the user first registers
router.put("/cart", auth, createUserCart);

// Cart items (ie before payment)
router.post("/cart/items/only", auth, getAllCartItems);
router.post("/cart/items", auth, getCartIncludingCartItems);

router.put("/cart/item", auth, putCartItem);
router.delete("/cart/item", auth, deleteCartItem);

// Order items (ie after payment goes through)
router.post("/order/items", auth, getOrderIncludingOrdereredItems);
router.put("/order/payment", auth, putOrderPayment);
// router.patch("/orders/payment/paid", auth, patchOrderPayment);

router.patch("/order", auth, patchOrder);

module.exports = router;
