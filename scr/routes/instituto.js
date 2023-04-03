const express = require('express');
const router = express.Router();
const Cadastro = require('../models/instituto.js');

router.post('/', (req, res) => {
  const { name, telephone, opening_hours, description } = req.body;
  Cadastro.create({ name, telephone, opening_hours, description })
    .then(cadastro => {
      res.status(201).json({ message: 'Cadastro criado com sucesso', cadastro });
    })
    .catch(err => {
      res.status(500).json({ message: 'Erro ao criar cadastro', error: err });
    });
});

module.exports = router;