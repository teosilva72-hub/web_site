const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const conn = require('../model/database/payment')
const payment = require('../model/database/payment')
const port = 3000
app.listen(port)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs');
app.set('views', './view/')

app.get('/', (req, res) => {
    res.render('index')
})
app.post('/', (req, res) => {
    payment.create({
        nome: req.body.nome,
        valor: req.body.valor
    }).then(() => {
        res.send('cadastrado com sucesso')
    }).catch((err) => {
        res.send('erro ao cadastrar' + err)
    })
})

function teste(teste) {
    console.log(teste)
    return teste
}
app.use(express.static(path.join(__dirname, "../view/resources")))
app.use(express.static(path.join(__dirname, "../node_modules")))