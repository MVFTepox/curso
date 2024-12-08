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

router.get("/product", (req, res) => {
  Product.find()
    .then((product) => {
      res.send(product);
    })
    .catch((error) => {
      res.status(404).send("No hay datos" + error);
    });
});

router.get("/product/:id", (req, res) => {
  Product.findById(req.params.id)
    .then((product) => {
      if (!product) {
        return res.status(404).send("No hay datos");
      }
      res.send(product);
    })
    .catch((error) => {
      res.status(404).send("No hay datos" + error);
    });
});

router.put("/product/:id", (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((product) => {
      if (!product) {
        return res.status(404).send("No hay datos");
      }
      res.send(product);
    })
    .catch((error) => {
      res.status(404).send("No hay datos" + error);
    });
});

router.delete("/product/:id", (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then((product) => {
      if (!product) {
        return res.status(404).send("No hay datos");
      }
      res.send(product);
    })
    .catch((error) => {
      res.status(404).send("No hay datos" + error);
    });
});

router.get("/product/category/:category", (req, res) => {
  Product.find({ category: req.params.category })
    .then((product) => {
      if (!product) {
        return res.status(404).send("No hay datos");
      }
      res.send(product);
    })
    .catch((error) => {
      res.status(404).send("No hay datos" + error);
    });
});

router.get("/product/id_admin/:id_admin", (req, res) => {
  Product.find({ id_admin: req.params.id_admin })
    .then((product) => {
      if (!product) {
        return res.status(404).send("No hay datos");
      }
      res.send(product);
    })
    .catch((error) => {
      res.status(404).send("No hay datos" + error);
    });
});


module.exports = router;
