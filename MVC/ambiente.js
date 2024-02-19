const express = require('express');
const calculadoraController = require('./controller/executa');
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(__dirname + '/view'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/index.html');
});
app.use('/calcular', calculadoraController);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});