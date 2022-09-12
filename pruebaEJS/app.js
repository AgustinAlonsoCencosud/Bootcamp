const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Configurar plantilla
app.set('view engine', 'ejs')

// Ruta
app.get('/', (get, res) => {
    res.send('Hello world')
})

// Levantar servidor
app.listen(PORT, (req, res) =>{
    console.log(`Servidor activo en puerto: ${PORT}`)
})

