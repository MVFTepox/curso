const mongoose = require('mongoose');

// Modelo que calcula la compra de un producto
const purchaseSchema = new mongoose.Schema({
    id_user: { type: String, required: true },
    id_product: { type: String, required: true },
    quantity: { type: Number, required: true },
    priceForUnit: { type: Number, required: true },
    total: { type: Number } 
});


purchaseSchema.pre('save', function (next) {
    this.total = this.priceForUnit * this.quantity;
    next();
});

module.exports = mongoose.model('Purchase', purchaseSchema);
