const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/user", (req, res) => {
  const user = new User(req.body);
  if (user) {
    user
      .save()
      .then((user) => {
        res.status(201).send(user);
      })
      .catch((error) => {
        res.status(400).send("No hay datos" + error);
      });
  }
});
//llamar a todos usuarios
router.get("/user", (req, res) => {
  User.find()
    .then((user) => {
      res.send(user);
    })
    .catch((error) => {
      res.status(404).send("No hay datos" + error);
    });
});

//llamar a un usuario
router.get("/user/:id", (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send("No hay datos");
      }
      res.send(user);
    })
    .catch((error) => {
      res.status(404).send("No hay datos" + error);
    });
});
//actualizar
router.put("/user/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send("No hay datos");
      }
      res.send(user);
    })
    .catch((error) => {
      res.status(404).send("No hay datos" + error);
    });
});

//eliminar
router.delete("/user/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send("No hay datos");
      }
      res.send(user);
    })
    .catch((error) => {
      res.status(404).send("No hay datos" + error);
    });
});

//borrar tod
router.delete("/user", (req, res) => {
  User.deleteMany()
    .then((user) => {
      if (!user) {
        return res.status(404).send("No hay datos");
      }
      res.send(user);
    })
    .catch((error) => {
      res.status(404).send("No hay datos" + error);
    });
});

//login
router.post("/user/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email, password })
    .then((user) => {
      if (!user) {
        return res.status(404).send("No hay datos");
      }
      res.send(user);
    })
    .catch((error) => {
      res.status(404).send("No hay datos" + error);
    });
});

module.exports = router;
