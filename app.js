const express = require('express');
const path = require('path');
const porta = 5000

const usuarioRouter = require('./src/routes/usuarioRouter')
const indexRouter = require('./src/routes/indexRouter')
const app = express();

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(usuarioRouter)
app.use(indexRouter)

app.listen(porta, () => console.log("Aplicação rodando em http://localhost:5000"));