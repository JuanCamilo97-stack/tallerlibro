const mongoose = require('mongoose');

const librosSchema = new mongoose.Schema({

    name: String,
    genero: String,
    NumRef: String,

})
//b

const Libros = mongoose.model('libros', librosSchema);

module.exports = Libros;