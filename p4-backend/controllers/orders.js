const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// --- CRUD Functions ---

// GET - get the cart items for an order
const getAllCartItems = async (req, res) => {
  console.log(req.body.order_id);
  try {
    const allCartItems = await prisma.cart_items.findMany({
      where: { order_id: req.body.order_id },
    });
    res.json(allCartItems);
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "cannot get cart items" });
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
    res.json({ status: "OK", msg: "user saved" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "cannot save user" });
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

    const customPatch = (variable) => {
      const patchOrderPayment = async (req, res) => {
        try {
          const updatedOrder = {};

          updatedOrder.is_paid = true;
          console.log("order_id", variable);
          await prisma.orders.update({
            where: { id: idNum },
            data: updatedOrder,
          });

          res.json({ status: "ok", msg: "order has been updated yeah" });
        } catch (error) {
          console.log(error.message);
          res.json({ status: "error", msg: "error in updating order lah" });
        }
        return;
      };
    };

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
  getAllCartItems,
  putCartItem,
  deleteCartItem,
  getOrderIncludingOrdereredItems,
  patchOrder,
  putOrderPayment,
};
