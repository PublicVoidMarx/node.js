const express = require('express')
const router = express.Router()

const Producto = require('../models/producto')

router.get('/', async(req,res) => {
    try{
        const arrayProductosDB = await Producto.find()
        //console.log(arrayProductosDB)
        res.render("mascotas", {
            arrayMascotas: arrayProductosDB
        })
    }catch(error){
        console.log(error);
    }
    
})

router.get('/crear', (req,res) => {
    res.render('crear')
})

router.post('/',async(req,res) => {
    const body = req.body
    try {
        await Producto.create(body)
        res.redirect('/mascotas')
    } catch (error) {
        console.log(eror)
    }
})

router.get('/:id', async(req,res) => {
    const id = req.params.id
    try {
        const productoDB = await Producto.findOne({_id: id}) 
        res.render('editar',{
            producto: productoDB,
            error:false})
    } catch (error) {
        res.render('editar',{
            error:true,
            mensaje:'Id doesnt exist'
        })
    }
    
   
})

module.exports = router