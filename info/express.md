METODOS HTTP

GET Solicitar datos

POST Enviar/Crear datos

PUT Reemplazar datos

PATCH Modificar parcialmente un dato

DELETE Borrar un dato


CODIGOS DE ESTADO HTTP

1** Respuestas informativas
2** Respuestas exitosas
3** Redirecciones
4** Error del cliente
5** Errores del servidor

CODIGOS MAS COMUNES

200: OK -> La peticion se realizo con exito.
301: Moved permanently -> El recurso se ha movido.
302: Found -> El recurso fue encontrado.
304: Not Modified -> El recurso no cambio, se cargara desde el cache.
400: Bad Request -> El pedido esta mal.
401: Unauthorized -> No estas autorizado, seguramente debas autenticarte.
403: Forbidden -> El pedido esta prohibido y no deberia repetirse.
404: Not Found -> El recurso no fue encontrado.
500: Internal Server Error -> Hubo un error en el servidor.
503: Service Unavalaible -> El servicio solicitado no esta disponible.
550: Permission Denied -> Permiso denegado.

LEVANTAR SERVIDOR CON EXPRESS

const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send('Hola Mundo');
});

app.listen(8000, () =>
    console.log('Levantando un servidor con Express')
)

ROUTING AND RESPONSE

GET

Respuesta de texto
app.get('/home', (req, res) =>{
    res.send('Hola, estamos en el home')
})

Respuesta de file
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/about-us.html'))
});