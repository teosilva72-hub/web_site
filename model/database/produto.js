const { Sequelize } = require('./conn')
const Conn = require('./conn')
const Produto = Conn.conn.define('produto', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        categoria: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        descricao: {
            type: Sequelize.STRING
        },
        imagem: {
            type: Sequelize.STRING
        },
        valor: {
            type: Sequelize.STRING
        }
    })
    //Produto.sync({ force: true })
module.exports = Produto