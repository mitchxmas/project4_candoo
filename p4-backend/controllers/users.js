const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

// --- CRUD Functions ---

// this works!
const getUsers = async (req, res) => {
  try {
    const allUsers = await prisma.users.findMany({
      include: { seller_services: true },
    });
    res.json(allUsers);
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "cannot get users" });
  }
};

// this works!
const getOneUser = async (req, res) => {
  try {
    const oneUser = await prisma.users.findUnique({
      where: { auth_user_id: req.body.auth_user_id },
    });
    res.json(oneUser);
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "error getting the user" });
  }
};

// this works!
const putUsers = async (req, res) => {
  try {
    await prisma.users.create({
      data: {
        id: uuidv4(),
        email: req.body.email,
        auth_user_id: req.body.auth_user_id,
        role: req.body.role,
        is_seller: req.body.is_seller,
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        mobile: req.body.mobile,
        address_line1: req.body.address_line1,
        address_line2: req.body.address_line2,
        postcode: req.body.postcode,
        city: req.body.city,
        country: req.body.country,
        orders: {
          create: {
            gst: 0,
            total: 0,
            is_paid: 0,
            payment_id: null,
          },
        },
      },
    });
    res.json({ status: "OK", msg: "user saved" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "cannot save user" });
  }
};

//this works!
const deleteUser = async (req, res) => {
  try {
    await prisma.users.delete({ where: { id: req.body.id } });

    // await prisma.users.findByIdAndDelete(req.params.id);
    res.json({ status: "ok", msg: "user deleted" });
  } catch (error) {
    console.log(error.message);
    res.json({ status: "error", msg: "error deleting user" });
  }
};

// this works!
const patchUser = async (req, res) => {
  try {
    const updatedUser = {};

    if ("email" in req.body) updatedUser.email = req.body.email;
    if ("role" in req.body) updatedUser.role = req.body.role;
    if ("username" in req.body) updatedUser.username = req.body.username;
    if ("firstname" in req.body) updatedUser.firstname = req.body.firstname;
    if ("lastname" in req.body) updatedUser.lastname = req.body.lastname;
    if ("mobile" in req.body) updatedUser.mobile = req.body.mobile;
    if ("address_line1" in req.body)
      updatedUser.address_line1 = req.body.address_line1;
    if ("address_line2" in req.body)
      updatedUser.address_line2 = req.body.address_line2;
    if ("city" in req.body) updatedUser.city = req.body.city;
    if ("postcode" in req.body) updatedUser.postcode = req.body.postcode;
    if ("country" in req.body) updatedUser.country = req.body.country;
    if ("is_seller" in req.body) updatedUser.is_seller = req.body.is_seller;
    if ("auth_user_id" in req.body)
      updatedUser.auth_user_id = req.body.auth_user_id;

    console.log("updatedUser", updatedUser);
    await prisma.users.update({
      where: { id: req.body.id },
      data: updatedUser,
    });

    res.json({ status: "ok", msg: "user updated" });
  } catch (error) {
    console.log(error.message);
    res.json({ status: "error", msg: "error in updating user" });
  }
};

// GET the payment means of one user
const getUserPaymentMeans = async (req, res) => {
  try {
    const allUserPaymentMeans = await prisma.buyer_payment_means.findMany({
      where: { buyer_id: req.body.buyer_id },
    });
    res.json(allUserPaymentMeans);
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "cannot get users' payment means" });
  }
};

const addUserPaymentMeans = async (req, res) => {
  try {
    await prisma.buyer_payment_means.create({
      data: {
        buyer_id: req.body.buyer_id,
        type: req.body.type,
        provider: req.body.provider,
        card_number: req.body.card_number,
        card_expiry: req.body.card_expiry,
      },
    });
    res.json({ status: "OK", msg: "new payment method" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({
      status: "error",
      msg: "payment method cannot be saved for user",
    });
  }
};

module.exports = {
  getUsers,
  getOneUser,
  putUsers,
  deleteUser,
  patchUser,
  getUserPaymentMeans,
  addUserPaymentMeans,
};
