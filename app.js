const express = require('express');
const path = require('path');
const app = express;
const porta = 5000

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(porta, () => console.log("Aplicação rodando em http://localhost:5000"));