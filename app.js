const express = require('express')
const app = express()

const PORT = 3000




app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT)
})
app.get('/', (req, res) => {
    res.render('index')
})
app.post('/login', (req, res) => {

})
app.post('/register', (req, res) => {

})

app.set('view engine', 'ejs')
app.set('views', './view/pages')
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "./view/resources")))
app.use(express.static(path.join(__dirname, "./node_modules")))