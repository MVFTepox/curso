const express = require("express");
const router = express.Router();
const Product = require("../models/products");
const upload = require("../Middleware/Upload");

router.post("/product", upload.single("img"), (req, res) => {
  const { img, name, price, description, category, stock, id_admin } = req.body;

  const baseUrl = req.protocol + "://" + req.get("host") + "/";

  if (req.file) {
    req.body.img = baseUrl + req.file.filename;
  }
 

  const product = new Product({
    img: req.body.img,
    name,
    price,
    description,
    category,
    stock,
    id_admin
  });

  product
    .save()
    .then((product) => {
      res.status(201).send(product);
    })
    .catch((error) => {
      res.status(400).send("No hay datos" + error);
    });
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
