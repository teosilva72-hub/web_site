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
const cookieParser = require('cookie-parser')
const port = 3000
app.listen(port)
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
app.set('view engine', 'ejs');
app.set('views', './view/')

app.get('/', eAdmin, async(req, res) => {
    await User.findAll({
        attributes: ['id', 'name', 'email'],
        order: [
            ['id', 'desc']
        ]
    }).then((users) => {
        return res.status(200).json({
            erro: false,
            users: users,
            id_logado: req.userId
        })
    }).catch(() => {
        return res.json({
            erro: false,
            mensagem: 'listar usuários',
            userId: req.userId,
            userName: req.userName
        })
    })


})
app.get('/login', (req, res) => {
    res.render('../view/template/login')
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
            mensagem: 'Usuário ou senha incorreta.'
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
    let options = {
        path: "/",
        sameSite: true,
        maxAge: 1000 * 60 * 60 * 24, // would expire after 24 hours
        httpOnly: true, // The cookie only accessible by the web server
    }
    console.log(token)
    res.cookie('x-access-token', token, options)
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