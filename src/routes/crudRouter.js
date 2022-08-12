const express = require('express')
const router = express.Router()
const crudController = require('../controllers/crudController')
const multer = require('multer')
const bodyParser = require('sequelize')
const path = require('path')
const { appendFile } = require('fs')

const multerDiskStorage = multer.diskStorage({
    destination: (req,file, callback) => {
        const folder = path.join('__dirname', '../public/produtos');
    callback(null, folder)
    },
    filename: (req,file,callback)=>{
        const imgName = Date.now() + file.originalname
        callback(null, imgName)}
    })
    const upload = multer({storage:multerDiskStorage})
    
    router.get('/crud', crudController.index)
    router.get('/Produto', crudController.create)

    

    router.post('/Produto', function(req, res){
        req.body.Enviar
        console.log(req.body)
        res.send('Enviar:' + req.body.Enviar + 'Enviar:' + req.body.Enviar)
    })
    router.post('/cadastro', upload.single('produto-img'), crudController.cadastro)

    console.log('Documentos Enviados!!')

    

module.exports = router