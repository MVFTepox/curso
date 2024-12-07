const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/user", (req, res) => {
    const user = new User(req.body);
    if (user) {
        user.save().then((user) => {
            res.status(201).send(user);
        }).catch((error) => {
            res.status(400).send("No hay datos" + error);
        });
    }
});

module.exports = router;