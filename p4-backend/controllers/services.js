const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// --- CRUD Functions ---

// Get all categories only (no inclusions of nested tables)
const getAllCategoriesOnly = async (req, res) => {
  try {
    const allCategories = await prisma.categories.findMany({});
    res.json(allCategories);
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "cannot get users" });
  }
};

// Get all categories and including nested services
const getAllCategoriesIncludingServices = async (req, res) => {
  try {
    const allCategoriesIncludingServices = await prisma.categories.findMany({
      include: { services: true },
    });
    res.json(allCategoriesIncludingServices);
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "cannot get users" });
  }
};

// Get all services including nested sellers
const getAllServicesIncludingSellers = async (req, res) => {
  try {
    const allSeriesIncludingSellers = await prisma.services.findMany({
      include: { seller_services: true },
    });
    res.json(allSeriesIncludingSellers);
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "cannot get users" });
  }
};

// GET all services for a given category, no nested tables
const getAllServicesInCategory = async (req, res) => {
  try {
    const allServices = await prisma.services.findMany({
      where: { category_id: req.body.category_id },
    });
    res.json(allServices);
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "cannot get users" });
  }
};

// GET all services only (no inclusions of nested tables)
const getAllServicesOnly = async (req, res) => {
  try {
    const allServices = await prisma.services.findMany({});
    res.json(allServices);
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "cannot get users" });
  }
};

// GET all services sold by a seller
const getAllServicesFromSeller = async (req, res) => {
  try {
    const allServicesSoldBySeller = await prisma.seller_services.findMany({
      where: { seller_id: req.body.seller_id },
    });
    res.json(allServicesSoldBySeller);
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "cannot get users" });
  }
};

// GET all sellers for a given service (no inclusions of nested tables)
const getAllServiceSellers = async (req, res) => {
  try {
    const allServiceSellers = await prisma.seller_services.findMany({
      where: { service_id: req.body.service_id },
    });
    res.json(allServiceSellers);
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "cannot get users" });
  }
};

// PUT Add a service to seller
const putSellerService = async (req, res) => {
  try {
    await prisma.seller_services.create({
      data: {
        name: req.body.name,
        desc: req.body.desc,
        service_id: req.body.service_id,
        seller_id: req.body.seller_id,
        price: req.body.price,
        price_type: req.body.price_type,
      },
    });
    res.json({ status: "OK", msg: "user saved" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "cannot save user" });
  }
};

// DELETE Delete a cart item for a user
const deleteSellerService = async (req, res) => {
  try {
    await prisma.seller_services.delete({
      where: {
        id: req.body.id,
      },
    });

    res.json({ status: "ok", msg: "service deleted from seller" });
  } catch (error) {
    console.log(error.message);
    res.json({ status: "error", msg: "error deleting service from seller" });
  }
};

module.exports = {
  getAllCategoriesOnly,
  getAllCategoriesIncludingServices,
  getAllServicesOnly,
  getAllServicesIncludingSellers,
  getAllServiceSellers,
  getAllServicesInCategory,
  putSellerService,
  deleteSellerService,
  getAllServicesFromSeller,
};
