const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27018/banco-calindra', {
    useNewUrlParser: true,
}).then(()=>{
    console.log("conectado com MongoDB")
}).catch(error => console.log('Erro: ' + error))

mongoose.Promise = global.Promise;

module.exports = mongoose;