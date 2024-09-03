require('dotenv').config();
const express = require('express');
const sequelize = require('./database');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

const app = express();

app.use(express.json());

// Testar conexão com o SQLite
sequelize.authenticate()
  .then(() => console.log('Conectado ao SQLite...'))
  .catch(err => console.error('Erro ao conectar ao SQLite:', err));

// Sincronizar modelos com o banco de dados
sequelize.sync()
  .then(() => console.log('Modelos sincronizados com o banco de dados'))
  .catch(err => console.error('Erro ao sincronizar modelos com o banco de dados:', err));

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// Iniciando o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
