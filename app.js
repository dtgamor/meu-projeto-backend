const express = require('express'); //importa o express para o projeto
const app     = express(); //instancia o express
const PORT = 8081;

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
