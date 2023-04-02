const router = require("express").Router();
const {
  getAllProduct,
  createProduct,
  singleProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product.controller");

router.get("/product", getAllProduct);
router.get("/product/:id", singleProduct);
router.post("/product", createProduct);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

module.exports = router;
