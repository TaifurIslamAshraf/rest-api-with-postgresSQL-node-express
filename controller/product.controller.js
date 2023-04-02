const { v4: uuidv4 } = require("uuid");
const pool = require("../config/db");

const getAllProduct = async (req, res) => {
  try {
    const allProduct = await pool.query("SELECT * FROM product");

    res
      .status(200)
      .json({ message: "All products are returned", product: allProduct.rows });
  } catch (error) {
    res.status(402).json({ error: error });
  }
};

const singleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await pool.query("SELECT * FROM product WHERE id=$1", [id]);
    res.status(200).json({
      message: "Single products are returned by id",
      data: product.rows,
    });
  } catch (error) {
    res.status(402).json({ error: error });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, price, disc } = req.body;
    const id = uuidv4();
    const newProduct = await pool.query(
      "INSERT INTO product (id,name,price,disc) VALUES ($1, $2, $3, $4) RETURNING *",
      [id, name, price, disc]
    );
    res
      .status(201)
      .json({ message: "Product create successfully", data: newProduct.rows });
  } catch (error) {
    res.status(404).json({ error: error });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { name, price, disc } = req.body;
    const { id } = req.params;
    const updatedProduct = await pool.query(
      "UPDATE product SET name=$1, price=$2, disc=$3 WHERE id=$4",
      [name, price, disc, id]
    );
    res
      .status(200)
      .json({ message: "product update successfully", data: updateProduct });
  } catch (error) {
    res.status(404).json({ error: error });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM product WHERE id=$1", [id]);
    res.json({ message: "product update successfully" });
  } catch (error) {
    res.status(404).json({ error: error });
  }
};

module.exports = {
  getAllProduct,
  createProduct,
  singleProduct,
  updateProduct,
  deleteProduct,
};
