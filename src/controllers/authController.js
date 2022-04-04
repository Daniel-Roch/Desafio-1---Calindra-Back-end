const express = require('express');
const Address = require('../models/Address')

const router = express.Router();

module.exports = (app) =>{

    app.get('/', async (req,res)=>{
        res.send('<h1>Bem-vindo(a)!</h1>')
    })

    app.post('/api/V1/Register', async (req,res)=>{
        const arrayAddress = req.body
        try{
            await Address.create(...arrayAddress)
            res.status(201).json({message: "Dados Criado com Sucesso", Envio: true})
        }catch(err){
            res.status(500).json({Error: err, Envio: false})
        }
    })

    app.get('/Query', async (req,res)=>{

    })
}