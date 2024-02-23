// const express = require("express");
// const userRoute = require("./src/routes/user_route");

// const app = express();

// app.use("/soma", userRoute);

// //ROTA 
//     //Method HTTP - CRUD (CREATE, READ, UPDATE, DELETE);
//         //GET - Pega um info;
//         //POST - Cria uma info;
//         //PUT - Altera todas as informações;
//         //PATH - Altera parte da info;
//         //DELETE - Apaga uma info;

//     //Name - Um identificador da rota;

//     //Function (Callback) - Responsavel por executar algum comando;

//     // app.get("/soma", (req, res) => {
//     //     const soma = 1 + 55;

//     //     res.json({soma:soma});
//     // });

// app.listen(3000);


// index.js

const express = require('express');
const userRoute = require('./src/routes/user_route');
const app = express();

app.use('/api', userRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
