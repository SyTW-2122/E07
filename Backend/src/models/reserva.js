const { Schema, model } = require('mongoose')

const esquemaReserva = new Schema({
  dni_cliente: String,
  nombre_hotel: String,
  tipo_habitacion: String,
  numero_huespedes: Number,
  fecha_entrada: String,
  fecha_salida: String
})

module.exports = model('Reserva', esquemaReserva);