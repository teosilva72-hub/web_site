const sequelize = require('sequelize')
const { Sequelize } = require('./conn')
const Conn = require('./conn')
const User = Conn.conn.define('user', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        senha: {
            type: Sequelize.STRING
        },
        cep: {
            type: Sequelize.STRING
        },
        logradouro: {
            type: Sequelize.STRING
        },
        bairro: {
            type: Sequelize.STRING
        },
        cidade: {
            type: Sequelize.STRING
        },
        uf: {
            type: Sequelize.STRING
        },
        number: {
            type: sequelize.STRING
        },
        tel: {
            type: sequelize.STRING
        }
    })
    //User.sync({ force: true })
module.exports = User