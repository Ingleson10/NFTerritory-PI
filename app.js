const express = require('express');
const path = require('path');
const porta = 5000

const usuarioRouter = require('./src/routes/usuarioRouter')
const compraRouter = require('./src/routes/compraRouter')
const indexRouter = require('./src/routes/indexRouter')
const loginRouter = require('./src/routes/loginRouter')
const carrinhoRouter = require('./src/routes/carrinhoRouter');
const cadastroRouter = require('./src/routes/cadastroRouter');
const produtoRouter = require('./src/routes/produtoRouter');
const crudRouter = require('./src/routes/crudRouter')
const app = express();

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.use('/usuario', usuarioRouter);
app.use('/compra', compraRouter);
app.use(indexRouter);
app.use(loginRouter);
app.use(carrinhoRouter);
app.use(cadastroRouter);
app.use(produtoRouter);
app.use(crudRouter);

app.listen(porta, () => console.log("Aplicação rodando em http://localhost:5000"));