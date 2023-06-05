const express = require("express");
const router = express.Router();
const {
  getAllCategoriesOnly,
  getAllCategoriesIncludingServices,
  getAllServicesInCategory,
  getAllServicesOnly,
  getAllServiceSellers,
  getAllServicesIncludingSellers,
  putSellerService,
  deleteSellerService,
  getAllServicesFromSeller,
} = require("../controllers/services");
const checkValid = require("../middleware/checkValid");
const { auth, adminAuth } = require("../middleware/auth");

router.get("/categories", getAllCategoriesOnly);
router.get("/categories/services/all", auth, getAllCategoriesIncludingServices);
router.get("/category/services", auth, getAllServicesInCategory);

router.get("/services", auth, getAllServicesOnly);
router.get("/services/sellers/all", auth, getAllServicesIncludingSellers);
router.get("/service/sellers", auth, getAllServiceSellers);

router.get("/services/seller", auth, getAllServicesFromSeller);

router.put("/service/sellers", adminAuth, putSellerService);

router.delete("/service/sellers", adminAuth, deleteSellerService);

module.exports = router;
