const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const conn = require('../model/database/payment');
const payment = require('../model/database/payment');
const User = require('../model/database/user');
const Bebidas = require('../model/database/bebidas');
const Pedido = require('../model/database/pedido');
const Produto = require('../model/database/produto');
const Carrosel = require('../model/database/carrosel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { eAdmin } = require('./auth');
const cookieParser = require('cookie-parser');
const Menu = require('../model/database/menu')
const port = 3000;
const axios = require('axios')

app.listen(port);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './view/');
const dateUser = [];

var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
 
app.get('/', eAdmin, async(req, res) => {
    const x = require('../view/resources/js/controller');
    console.log(req.userName)
    const menu = await Menu.findAll();
    const produto = await Produto.findAll();
    const carrosel = await Carrosel.findAll();
    const bebidas = await Bebidas.findAll();
    await res.render('../view/index.ejs', {User: req.userName, produto: produto, carrosel: carrosel, userName: dateUser, menu: menu, bebidas: bebidas });

});

app.get('/cadastrar-Produto', (req, res) => {
    res.render('../view/template/cadastroProd.ejs');
});

app.post('/cadastrar-Produto', async(req, res) => {
    const dados = req.body
        //console.log(dados)
    await Produto.create(dados).then(() => {
        //console.log(dados)
    }).catch((err) => {
        console.log(err);
    })

    return res.status(200);
});

app.get('/login', (req, res) => {
    res.render('../view/template/login');
    
});

app.post('/login', async(req, res) => {
    const user = await User.findOne({
        attributes: ['id', 'name', 'email', 'senha'],
        where: {
            email: req.body.email,
            //password: req.body.password
        }
    });

    if (user === null) {

        return res.status(400)
    }
    if (!(await bcrypt.compare(req.body.password, user.senha))) {
        return res.status(400).json({
            erro: true,
            mensagem: 'Senha incorreta',
        })
    } else {
        
        const token = jwt.sign({ id: user.id, name: user.name }, 'ASD4ASDAS5D4SAD2ASDSADS8F5', {
            expiresIn: '1h' //10 min
        });
        res.cookie('auth',token);
        console.log(token)
        res.redirect(`/`);
        //return res.json({res:true})
    }
    

})

function getUser(user) {
    return user;
}
app.get('/cadastrar-user', async(req, res) => {
    const menu = await Menu.findAll();
    res.render('../view/template/cadastrarUser.ejs', { menu: menu });
})
app.post('/cadastrar-user', async(req, res) => {
    const dados = req.body
    dados.senha = await bcrypt.hash(dados.senha, 8)
    await User.create(dados).then(() => {

        res.redirect('/login');
    }).catch((err) => {
        console.log(err)

    })
})

app.use(express.static(path.join(__dirname, "../view/resources")))
app.use(express.static(path.join(__dirname, "../node_modules")))