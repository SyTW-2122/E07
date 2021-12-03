
var express = require('express');
var app = express();


const users = [
    {
        nombre_usuario: "alu0101206479",
        contraseña: "xxxxxx",
        nombre: "Acoidan",
        apellidos: "Mesa Hernandez",
        telefono: "673842839",
        dni: "4637940L",
        correo_electronico: "alu0101206479@ull.edu.es",
        fecha_nacimiento: "21/10/2000",
        reservas: [{id: "RB-127273"}, {id: "RC-21627"}]
    },
    {
        nombre_usuario: "alu0101203980",
        contraseña: "xxxxxx",
        nombre: "Diego",
        apellidos: "Rodríguez Pérez",
        telefono: "673842839",
        dni: "4637940L",
        correo_electronico: "alu0101203980@ull.edu.es",
        fecha_nacimiento: "21/10/2000",
        reservas: [{id: "RB-15723"}]
    }
];


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get("/users", (req, res) => {
    return res.json(users);
});


app.get("/user/:id", (req, res) => {
  
    const idx = req.params.id - 1;

    if (!users[idx]) {
        return res.status(404).json({ error: "User not found" });
    }

    return res.json(users[idx]);
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});