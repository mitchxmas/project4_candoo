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
  updateSellerService,
} = require("../controllers/services");
const checkValid = require("../middleware/checkValid");
const { auth, adminAuth } = require("../middleware/auth");

router.get("/categories", getAllCategoriesOnly);
router.get("/categories/services/all", getAllCategoriesIncludingServices);
router.post("/category/services", getAllServicesInCategory);

router.get("/services", auth, getAllServicesOnly);
router.post("/services/sellers/all", getAllServicesIncludingSellers);
router.post("/service/sellers", getAllServiceSellers);

router.post("/services/seller", auth, getAllServicesFromSeller);

router.put("/service/seller", auth, putSellerService);

router.delete("/service/seller", auth, deleteSellerService);
router.patch("/service/seller", auth, checkValid, updateSellerService);

module.exports = router;
