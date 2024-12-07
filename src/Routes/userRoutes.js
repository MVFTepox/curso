const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/user", (req, res) => {
    const user = new User(req.body);
    user.save()
        .then(() => res.status(201).send(user))
        .catch((e) => res.status(400).send(e));
});

module.exports = router;