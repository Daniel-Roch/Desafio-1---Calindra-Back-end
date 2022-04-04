const express = require('express');
const Address = require('../models/Address')

const router = express.Router();

module.exports = (app) =>{

    app.get('/api/V1/AllRegister', async (req,res)=>{
        try{
            const allAddress = await Address.find()
            res.status(200).json(allAddress)
        }catch(err){
            res.status(500).json({Error: err, Envio: false})
        }
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

}