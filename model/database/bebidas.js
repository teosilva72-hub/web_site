const { Sequelize } = require('./conn');
const Conn = require('./conn');
const bebidas = Conn.conn.define('bebidas', {
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
});
//bebidas.sync({ force: true })
module.exports = bebidas