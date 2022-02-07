const { Schema, model } = require('mongoose')

const esquemaHotel = new Schema({
  nombre: String,
  ruta_imagen: String,
  descripcion: String,
  enlace_pagina: String
})

module.exports = model('Hotel', esquemaHotel);