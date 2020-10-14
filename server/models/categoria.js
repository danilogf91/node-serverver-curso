const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let categoriaSchema = new Schema({
    descripcion: {
        type: String,
        unique: true,
        required: [true, 'La descripcion es obligatoria']
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});


/*categoriaSchema.plugin(uniqueValidator, {
    message: '{PATH} debe de ser unico' // lo que el usuario envia en el email
});
*/
module.exports = mongoose.model('Categoria', categoriaSchema);