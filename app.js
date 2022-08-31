const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const sessionParser = require('express-session');
const porta = 5000

const usuarioRouter = require('./src/routes/usuarioRouter')
const compraRouter = require('./src/routes/compraRouter')
const indexRouter = require('./src/routes/indexRouter')
const loginRouter = require('./src/routes/loginRouter')
const carrinhoRouter = require('./src/routes/carrinhoRouter');
const cadastroRouter = require('./src/routes/cadastroRouter');
const produtoRouter = require('./src/routes/produtoRouter');
const crudRouter = require('./src/routes/crudRouter')
const sairRouter = require('./src/routes/sairRouter')
const finalizarRouter = require('./src/routes/compraRouter')
const app = express();

app.use(sessionParser({ secret: 'nfterritory', resave: false, saveUninitialized: false }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/usuario', usuarioRouter);
app.use('/compra', compraRouter);
app.use(indexRouter);
app.use('/login', loginRouter);
app.use('/carrinho', carrinhoRouter);
app.use('/cadastrar', cadastroRouter);
app.use('/produtos', produtoRouter);
app.use('/finalizar', finalizarRouter)
app.use(crudRouter)
app.use(sairRouter)

app.listen(porta, () => console.log("Aplicação rodando em http://localhost:5000"));