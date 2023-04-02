const express = require("express");
const app = express();
const router = require("./router/product.router");

//middelware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//all router
app.use("/api", router);

//error router
app.use("*", (req, res, next) => {
  res.status(404).send("<h1>404 page not found</h1>");
  next();
});

//server error
app.use((error, req, res, next) => {
  res.status(500).json({ message: "internal error", errorMessage: error });
  next();
});

module.exports = app;
