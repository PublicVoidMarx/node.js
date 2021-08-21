const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//port
const port = process.env.PORT || 3000

//conexion a la database
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.739st.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`

mongoose.connect(uri, 
    {useNewUrlParser: true, useUnifiedTopology: true}
)
    .then(() => console.log('connected to database'))
    .catch(e => console.log(e))


//plantilla
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + "/public"))

app.use('/',require('./router/URL'))
app.use('/mascotas', require('./router/mascotas'))


app.use((req,res,next) => {
    res.status(404).render('404',{descripcion:'revisar URL'})
})

app.listen(port, () => {
    console.log('servidor: ',port)
})



