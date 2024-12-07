const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    rol: {type: String, required: true},
    cliente: {
        historial: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Historial'
        }]
    },
    admin: {
        historialVentas: [{
            id: { type : mongoose.Schema.Types.ObjectId },

        }],
        prodcutos: [{
            id: { type : mongoose.Schema.Types.ObjectId },

        }]
    }
})

module.exports = mongoose.model('User', userSchema)
