const { Schema, model } = require('mongoose')

const esquemaUsuario = new Schema({
  public nombre_usuario: String,
  public contraseña: String,
  public nombre: String,
  public apellidos: String,
  public telefono: Number,
  public dni: String,
  public correo_electronico: String,
  public fecha_nacimiento: String,
  public reservas: [{id: String}]
})

module.exports = model('User', esquemaUsuario);