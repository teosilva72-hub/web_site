const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const conn = require('../model/database/payment')
const payment = require('../model/database/payment')
const User = require('../model/database/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { eAdmin } = require('./auth')
const port = 3000
app.listen(port)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
app.set('view engine', 'ejs');
app.set('views', './view/')

app.get('/', eAdmin, async(req, res) => {
    return res.json({
        erro: false,
        mensagem: 'listar usuários',
        userId: req.userId,
        userName: req.userName
    })
})
app.post('/login', async(req, res) => {
    // res.render('../view/template/login')
    const user = await User.findOne({
        attributes: ['id', 'name', 'email', 'password'],
        where: {
            email: req.body.email,
            //password: req.body.password
        }
    })

    if (user === null) {
        return res.status(400).json({
            erro: true,
            mensagem: 'Usuário nao encontrado'
        })
    }
    if (!(await bcrypt.compare(req.body.password, user.password))) {
        return res.status(400).json({
            erro: true,
            mensagem: 'Senha incorreta',
        })
    }
    const token = jwt.sign({ id: user.id, name: user.name }, 'ASD4ASDAS5D4SAD2ASDSADS8F5', {
        expiresIn: 600 //10 min
    })
    return res.status(200).json({
        erro: false,
        mensagem: 'login realizado com sucesso',
        token
    })

})

app.post('/cadastrar', async(req, res) => {
    const dados = req.body
    dados.password = await bcrypt.hash(dados.password, 8)
    await User.create(dados).then(() => {
        return res.status(201).json({
            erro: false,
            mensagem: 'Usuário Cadastrado com sucesso'
        })
    }).catch((err) => {
        return res.status(400).json({
            erro: true,
            mensagem: 'Erro ao cadastrar'
        })
    })
})

app.use(express.static(path.join(__dirname, "../view/resources")))
app.use(express.static(path.join(__dirname, "../node_modules")))