const express = require("express");
const router = express.Router();
const Purchase = require("../models/purchases");

router.post("/purchase", (req, res) => {
    const purchase = new Purchase(req.body);
    if (purchase) {
        purchase
            .save()
            .then((purchase) => {
                res.status(201).send(purchase);
            })
            .catch((error) => {
                res.status(400).send("No hay datos" + error);
            });
    }
});

router.get("/purchase", (req, res) => {
    Purchase.find()
        .then((purchase) => {
            res.send(purchase);
        })
        .catch((error) => {
            res.status(404).send("No hay datos" + error);
        });
});

router.get("/purchase/:id", (req, res) => {
    Purchase.findById(req.params.id)
        .then((purchase) => {
            if (!purchase) {
                return res.status(404).send("No hay datos");
            }
            res.send(purchase);
        })
        .catch((error) => {
            res.status(404).send("No hay datos" + error);
        });
});

router.delete("/purchase/:id", (req, res) => {
    Purchase.findByIdAndDelete(req.params.id)
        .then((purchase) => {
            if (!purchase) {
                return res.status(404).send("No hay datos");
            }
            res.send(purchase);
        })
        .catch((error) => {
            res.status(404).send("No hay datos" + error);
        });
});

module.exports = router;