const express = require('express')
const router = express.Router()
const crudController = require('../controllers/crudController')
const multer = require('multer')
const path = require('path')
const verificarSeUsuarioEhAdmin = require('../middlewares/verificarSeUsuarioEhAdmin')

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
    
    router.get('/crud', verificarSeUsuarioEhAdmin, crudController.index)
    router.post('/cadastro', verificarSeUsuarioEhAdmin, upload.single('produto-img'), crudController.cadastro)

module.exports = router