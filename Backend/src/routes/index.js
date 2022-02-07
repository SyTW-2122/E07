const { Router } = require('express')
const router = Router();

const User = require("../models/user")
const Hotel = require("../models/hotel")

const jwt = require('jsonwebtoken');

router.get('/', (req, res) => res.send('Hello world'))

router.post('/signup', async (req, res) => {
  const { nombre_usuario, contrasena, nombre, apellidos, telefono, dni, correo_electronico, fecha_nacimiento} = req.body;
  let reservas = [];
  let tlf = parseInt(telefono)
  const nuevoUsuario = new User({nombre_usuario, contrasena, nombre, apellidos, tlf, dni, correo_electronico, fecha_nacimiento, reservas});

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