const { Router } = require('express')
const router = Router();

const User = require("../models/user")

router.get('/', (req, res) => res.send('Hello world'))

router.post('/signup', async (req, res) => {
  const { nombre_usuario, contrasena, nombre, apellidos, telefono, dni, correo_electronico, fecha_nacimiento} = req.body;
  let reservas = [];
  let tlf = parseInt(telefono)
  console.log({nombre_usuario, contrasena, nombre, apellidos, tlf, dni, correo_electronico, fecha_nacimiento, reservas})
  const nuevoUsuario = new User({nombre_usuario, contrasena, nombre, apellidos, tlf, dni, correo_electronico, fecha_nacimiento, reservas});
  await nuevoUsuario.save();
  res.send('Testing signup');
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
      res.status(200).send("Todo bien compa")
    }
  }
})

module.exports = router;