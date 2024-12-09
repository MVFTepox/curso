const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    id_user: { type: String, required: true },
    id_product: { type: String, required: true },
    nameProduct: { type: String, required: true },
    quantity: { type: Number, required: true },
    priceForUnit: { type: Number, required: true },
    total: { type: Number } 
});

//675621f1be8af901c9987fd2
purchaseSchema.pre('save', function (next) {
    this.total = this.priceForUnit * this.quantity;
    next();
});

module.exports = mongoose.model('Purchase', purchaseSchema);
