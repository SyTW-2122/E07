const { Router } = require('express')
const router = Router();

const User = require("../models/user")
const Hotel = require("../models/hotel")
const Reserva = require("../models/reserva")

const jwt = require('jsonwebtoken');

router.get('/', (req, res) => res.send('Hello world'))

router.post('/signup', async (req, res) => {
  const { nombre_usuario, contrasena, nombre, apellidos, telefono, dni, correo_electronico, fecha_nacimiento} = req.body;
  let tlf = parseInt(telefono)
  const nuevoUsuario = new User({nombre_usuario, contrasena, nombre, apellidos, telefono: tlf, dni, correo_electronico, fecha_nacimiento});
  console.log(nuevoUsuario);

  await nuevoUsuario.save();

  const token = jwt.sign({_id: nuevoUsuario._id}, 'secretKey');

  return res.status(200).json({token});
})

router.post('/signin', async (req, res) => {
  const { nombre_usuario, contrasena} = req.body;
  const usuario = await User.findOne({nombre_usuario})

  if (!usuario) {
    return res.status(401).send("No existe ningún usuario con ese nombre de usuario") 
  } else {
    if (usuario.contrasena !== contrasena) {
      return res.status(401).send("Contraseña incorrecta");
    } else {
      const token = jwt.sign({_id: usuario._id}, 'secretKey');

      return res.status(200).json({token})
    }
  }
})

router.get('/inicio', verifyToken, async (req, res) => {
  let hoteles = await Hotel.find()
  res.send(hoteles);
})

router.get('/perfil-usuario', verifyToken, async (req, res) => {
  let _id = req.userId;
  let usuario = await User.findOne({_id});
  res.json(usuario);
})

router.get('/perfil-reservas', verifyToken, async (req, res) => {
  let _id = req.userId;
  let usuario = await User.findOne({_id});
  let dni_cliente = usuario.dni;
  
  let reservas = await Reserva.find({dni_cliente})
  res.send(reservas);
})

router.post('/reserva-hotel', verifyToken, async (req, res) => {
  let _id = req.userId;
  let usuario = await User.findOne({_id});
  let dni_cliente = usuario.dni;
  const { nombre_hotel, tipo_habitacion, numero_huespedes, fecha_entrada, fecha_salida } = req.body;
  let json_reserva = {dni_cliente, nombre_hotel, tipo_habitacion, numero_huespedes, fecha_entrada, fecha_salida};
  const nuevaReserva = new Reserva(json_reserva);

  await nuevaReserva.save();

  return res.status(200).json(json_reserva);
})

module.exports = router;

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Accesso no autorizado, debe loguearse');
  } else {
     const token = req.headers.authorization.split(' ')[1];

     if (token === 'null') {
       return res.status(401).send('Acceso no autorizado, debe loguearse');
     } else {
          const payload = jwt.verify(token, 'secretKey');
          req.userId = payload._id;
          next();  
     }
  }
}