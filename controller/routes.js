const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const conn = require('../model/database/payment')
const payment = require('../model/database/payment')
const user = require('../model/database/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const port = 3000
app.listen(port)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs');
app.set('views', './view/')

app.get('/', (req, res) => {
        res.render('index')
    })
    /*app.post('/', (req, res) => {
        payment.create({
            nome: req.body.nome,
            senha: req.body.senha
        }).then(() => {
            // res.send('cadastrado com sucesso')
            //direcionamento caso sucesso
            res.redirect('/')
        }).catch((err) => {
            //res.send('erro ao cadastrar' + err)
            //direcionamento caso erro
            res.redirect('/')
        })
    })*/
app.post('/cadastrar', async(req, res) => {
    console.log(req.body)
    const password = await bcrypt.hash('123456', 8)
})

function teste(teste) {
    console.log(teste)
    return teste
}
app.use(express.static(path.join(__dirname, "../view/resources")))
app.use(express.static(path.join(__dirname, "../node_modules")))