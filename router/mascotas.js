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
        res.redirect('mascotas')
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

router.delete('/:id', async(req,res) => {
    const id = req.params.id
    try {
        const productoDB = await Producto.findByIdAndDelete({_id:id})
        if(productoDB){
            res.json({
                estado:true,
                mensaje:'eliminado'
            })      
        }else{
            res.json({
                estado:false,
                mensaje:'ya se elimino o no existe'
            })
        }    
    } catch (error) {
        console.log(error)
    }
})

router.put('/:id', async(req,res) => {
    const id = req.params.id
    const body = req.body

    try {
        const productoDB = await Producto.findByIdAndUpdate(
            id,body,{useFindAndModify:false}
        )
        res.json({
            estado: true,
            mensaje: 'product updated'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'update failed'
        })
    }
})

module.exports = router