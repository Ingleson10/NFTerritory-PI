const {Users, Permissions, Addresses} = require('../models')
const path = require('path')


const usuarioController = {



    index: async(req, res)=>{
       try{

        const usuario = await usuario.findAll({
            
                include: [
                {
                model: usuarioController,
                as: 'usuarioController',
                through: {attributes:[]}
                }
            ]
        })

        return res.status(200).json(usuario)
    }   catch (error){
        return res.status(500).json({ message: error.message})
    }
},

create: async (req, res)=>{
    try{
        let figuraPath
        const { nome, email, password, address } = req.body

        if(!req.file) figuraPath = path.join(__dirname, '/public/img/confirme.png')
        else figuraPath = req.file.path

        if(!address) throw new Error('Colocar as informações no endereço')

        const newAddress = await Addresses.create({
            street: address.street,
            numero: address.numero,
            distrito: address.distrito,
            cidade: address.cidade,
        })

        const usuario = await usuarioController.create({
            nome,
            email,
            password,
            address_id: newAddress.dataValues.id,
            figuraPath: figuraPath
        })

        await address.update(
            {usuario_id: usuario.dataValues.id},
            { where: {id: newAddress.dataValues.id}}
        )

        if (usuario && usuario.length > 0) usuario.usuarioController(usuario)
        else usuario.usuarioController([3])

        return res.status(201).json(usuario)
        } catch (error){
            return res.status(500).json({message: error.message})
        }
 

    }
}


    
    
    
    
    