const mongoose = require("mongoose");
const Purchase = require("./purchases");

const historySchema = new mongoose.Schema({
    id_user:{type: String, required: true},
    purchases: [{
        _id: { type: String, required: true, ref: "Purchase" },
    }],
});

module.exports = mongoose.model("History", historySchema);