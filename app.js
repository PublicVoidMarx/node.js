const express = require('express')
const app = express()

const port = process.env.PORT || 3000

//conexion a la database
const mongoose = require('mongoose');

const user = 'admin-user'
const password = 'Database42'
const database = 'Verduleria'
const uri = `mongodb+srv://admin-user:Database42@cluster0.739st.mongodb.net/Verduleria?retryWrites=true&w=majority`

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



