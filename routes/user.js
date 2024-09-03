const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Rota protegida
router.get('/', (req, res) => {
  const token = req.headers['authorization'];
  console.log("🚀 ~ router.get ~ token:", token)
  if (!token) {
    return res.status(403).send('Token não fornecido.');
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ message: 'Acesso concedido!', userId: decoded.id });
  } catch (error) {
    res.status(403).send('Token inválido.');
  }
});

module.exports = router;
