const { Schema, model } = require('mongoose')

const esquemaUsuario = new Schema({
  nombre_usuario: String,
  contrasena: String,
  nombre: String,
  apellidos: String,
  telefono: Number,
  dni: String,
  correo_electronico: String,
  fecha_nacimiento: String,
  reservas: [{id: String}]
})

module.exports = model('User', esquemaUsuario);