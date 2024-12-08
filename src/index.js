const express = require("express");
const mongoose = require("mongoose")
const userRoutes = require("./Routes/userRoutes")
const productRoutes = require("./Routes/productsRoute")
const purchasesRoutes = require("./Routes/purchasesRoute")
require('dotenv').config();

const app = express()
app.use(express.json())
app.use("/api", userRoutes)
app.use("/api", productRoutes)
app.use("/api", purchasesRoutes)

app.get("/", (req, res) => {
    res.send("Hello World")
})

mongoose.connect("mongodb+srv://MarioFraire:wl8dhT5hJddX3LfS@skyders.y5fhy.mongodb.net/Tacos?retryWrites=true&w=majority&appName=Skyders").then(() => {
    console.log('Connected to the database');
}).catch((error) => {
    console.error('Error connecting to the database:', error);
});

app.listen(3000, () => {
    console.log("Listening on port 3000")
})