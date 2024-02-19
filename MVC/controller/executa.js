const express = require('express');
const Calculo = require('../model/calculo');
const resultado = express.Router();

resultado.post('/hipotenusa', (req, res)=>{
    const { cateto1, cateto2 } = req.body;
    const hipotenusa = Calculo.Hipotenusa(
        parseFloat(cateto1), parseFloat(cateto2));
    res.redirect(`/resultado.html?hipotenusa=${hipotenusa}`);
});

resultado.post('/multiplicacao', (req, res)=>{
    const { valor1, valor2 } = req.body;
    const resultadoMultiplicacao = Calculo.Multiplicacao(
        parseFloat(valor1), parseFloat(valor2));
    res.redirect(`/resultado.html?resultado=${resultadoMultiplicacao}`);
});

module.exports = resultado;