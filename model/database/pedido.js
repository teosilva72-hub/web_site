const { Sequelize } = require('./conn')
const Conn = require('./conn')
const Pedido = Conn.conn.define('pedido', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        descricao: {
            type: Sequelize.STRING
        },
        unidade: {
            type: Sequelize.STRING
        },
        valor: {
            type: Sequelize.STRING
        },
        total: {
            type: Sequelize.STRING
        }
    })
    //Pedido.sync({ force: true })
module.exports = Pedido