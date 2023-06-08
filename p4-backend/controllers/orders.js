const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// --- MAIN STEPS OF THE CART TO ORDER PROCESS ---
// 1. an empty cart (ie a blank 'order') is created when a authUser is created
// 2. when the user is logged in, he/she can add cart-item to the order.
// 3. the cart & items will be stored and available when the user logs out and back in later
// 4. an "order" is merely when the payment has gone thru: payment details are registered, and cart_items become order_items

// STEP 1 - creating the empty cart

// PUT Create an empty 'order' ie the cart where cart item details will be stored
const createUserCart = async (req, res) => {
  console.log("this createUserCart was called");
  try {
    await prisma.orders.create({
      data: {
        gst: 0,
        total: 0,
        buyer_id: req.body.buyer_id,
        is_paid: 0,
        payment_id: null,
      },
    });
    res.json({ status: "OK", msg: "an empty cart was created" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({
      status: "error",
      msg: "something went wrong: an empty cart was not created",
    });
  }
};

// GET - get the cart items for an order, including the nested details of the service bought
const getAllCartItems = async (req, res) => {
  console.log(req.body.order_id);
  try {
    const allCartItems = await prisma.cart_items.findMany({
      where: { order_id: req.body.order_id },
      include: { seller_services: true },
    });
    res.json(allCartItems);
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "cannot get cart items" });
  }
};

// GET - get a cart and cart items (a cart is an order which has not been paid, ie "is_paid" = false...)
const getCartIncludingCartItems = async (req, res) => {
  try {
    const cartIncludingCartItems = await prisma.orders.findFirst({
      where: { is_paid: 0, buyer_id: req.body.buyer_id },

      include: { cart_items: true },
    });
    res.json(cartIncludingCartItems);
    console.log("got cart and all cart items");
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "cannot get cart and cart_items" });
  }
};

// This works!!
// PUT - Add a new cart item to an order
const putCartItem = async (req, res) => {
  try {
    await prisma.cart_items.create({
      data: {
        quantity: req.body.quantity,
        price: req.body.price,
        seller_service_id: req.body.seller_service_id,
        order_id: req.body.order_id,
      },
    });
    res.json({ status: "OK", msg: "item has been saved to cart" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "cannot add cart item" });
  }
};

// This works!!
// DELETE - Delete a cart item for a user
const deleteCartItem = async (req, res) => {
  try {
    await prisma.cart_items.delete({
      where: {
        id: req.body.id,
      },
    });

    res.json({ status: "ok", msg: "cart item deleted" });
  } catch (error) {
    console.log(error.message);
    res.json({ status: "error", msg: "error deleting cart item" });
  }
};

// ------ ORDERS & PAYMENTS ------

// this works!
// PATCH order wih payment data
const patchOrder = async (req, res) => {
  try {
    const updatedOrder = {};

    if ("gst" in req.body) updatedOrder.gst = req.body.gst;
    if ("total" in req.body) updatedOrder.total = req.body.total;
    if ("is_paid" in req.body) updatedOrder.is_paid = req.body.is_paid;
    if ("payment_id" in req.body) updatedOrder.payment_id = req.body.payment_id;

    console.log("updatedOrder", updatedOrder);
    await prisma.orders.update({
      where: { id: req.body.id },
      data: updatedOrder,
    });

    res.json({ status: "ok", msg: "order updated" });
  } catch (error) {
    console.log(error.message);
    res.json({ status: "error", msg: "error in updating order" });
  }
};

// PUT - Add a payment to an order
//Order is.paid is turned to true
//Cart items become ordered items

const putOrderPayment = async (req, res) => {
  // upon theoeretical OK from financial institution (bank, paypal): payment is placed

  try {
    await prisma.payments.create({
      data: {
        total: req.body.total,
        order_id: req.body.order_id,
        buyer_payment_means_id: req.body.buyer_payment_means_id,
      },
    });

    const varId = req.body.order_id;
    console.log("here we are", varId);

    customPatch(varId);

    res.json({ status: "OK", msg: "order payment saved" });
  } catch (error) {
    console.error(error.message);
    res
      .status(400)
      .json({ status: "error", msg: "order payment cannot be saved" });
  }
};

// GET - get an order including ordered items
const getOrderIncludingOrdereredItems = async (req, res) => {
  try {
    const orderIncludingOrdereredItems = await prisma.orders.findUnique({
      where: { id: req.body.id },
      include: { order_items: true },
    });
    res.json(orderIncludingOrdereredItems);
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "cannot get order and order_items" });
  }
};

module.exports = {
  createUserCart,
  getCartIncludingCartItems,
  getAllCartItems,
  putCartItem,
  deleteCartItem,
  getOrderIncludingOrdereredItems,
  patchOrder,
  putOrderPayment,
};
