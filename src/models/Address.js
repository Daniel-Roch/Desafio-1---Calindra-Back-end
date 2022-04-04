const mongoose = require('../config/db')

const AddressSchema = new mongoose.Schema({
    Street: {
        type: String,
        require: [true, 'Rua inválida. (Street)'],
    },
    Number: {
        type: [Number],
        required: [true,'Número inválido. (Number)'],
    },
    State: {
        type: String,
        require: true,
    },
    District:{
        type: String,
        require: true,
    },
    City: {
        type: String,
        require: true,
    },
    CEP:{
        type: String,
        required: true,
    },
    location: {
        type: {
          type: String,
          enum: ['Point'],
        },
        coordinates: {
          type: [Number],
        },
        formattedAddress: String
    },
    CreatedAt:{
        type: Date,
        default: Date.now,
    },
})

const Address = mongoose.model('Address', AddressSchema);

module.exports = Address