const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// --- CRUD Functions ---

// GET - get the cart items for a user including seller_services
const getAllCartItems = async (req, res) => {
  try {
    const allCartItems = await prisma.cart_items.findMany({
      where: { buyer_id: req.body.buyer_id },
      include: { seller_service: true },
    });
    res.json(allCartItems);
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "cannot get users" });
  }
};

// PUT - Add a new cart item to a user
const putCartItem = async (req, res) => {
  try {
    await prisma.cart_items.create({
      data: {
        quantity: req.body.quantity,
        price: req.body.price,
        seller_service_id: req.body.seller_service_id,
        buyer_id: req.body.buyer_id,
      },
    });
    res.json({ status: "OK", msg: "user saved" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "cannot save user" });
  }
};

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

const putOrderPayment = async (req, res) => {
  try {
    await prisma.cart_items.create({
      data: {
        quantity: req.body.quantity,
        seller_service_id: req.body.seller_service_id,
        buyer_id: req.body.buyer_id,
      },
    });
    res.json({ status: "OK", msg: "user saved" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "cannot save user" });
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
};
