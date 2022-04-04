const mongoose = require('../config/db')
const geocoder = require('../utils/geocoder')

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

AddressSchema.pre('save', async function(next){
    const loc = await geocoder.geocode(`${this.Street}, ${this.Number} - ${this.District}, ${this.City} - ${this.State}, ${this.CEP}`)
    //console.log(loc) -> ele me deu todas as coordenadas de todos os endereços do que passei para ele
    this.location = {
        type: 'Point',
        coordinates: [loc[0].longitude, loc[0].latitude],
        formattedAddress: loc[0].formattedAddress
    }
    next();
})

const Address = mongoose.model('Address', AddressSchema);

module.exports = Address