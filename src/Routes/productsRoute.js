const express = require("express");
const router = express.Router();
const Product = require("../models/products");

router.post("/product", (req, res) => {
  const product = new Product(req.body);
  if (product) {
    product
      .save()
      .then((product) => {
        res.status(201).send(product);
      })
      .catch((error) => {
        res.status(400).send("No hay datos" + error);
      });
  }
});

module.exports = router;
