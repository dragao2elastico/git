// Modulos
var express = require('express');
var app = express();

var port = 3000;
var api = [
  { name: "a", value: "b"},
  { name: "c", value: "d"}
]

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
console.log(`Aplicativo logado com êxito em: http://localhost:${port}`)
})