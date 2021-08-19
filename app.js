const express = require('express')
const app = express()

const port = 3000

//plantilla
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + "/public"))

app.get('/', (req,res) => {
    res.render('index', {titulo: "titulo dinamico"})
})

app.get('/servicios', (req,res) => {
    res.render('servicios', {titulo: 'otro titulo ejs'})
})

app.use((req,res) => {
    res.status(404).render('404',{descripcion:'revisar URL'})
})

app.listen(port, () => {
    console.log('servidor: ',port)
})



