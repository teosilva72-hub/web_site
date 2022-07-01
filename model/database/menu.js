const { Sequelize } = require('./conn');
const Conn = require('./conn');
const menu = Conn.conn.define('menus', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    categoria: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
});
//menu.sync({ force: true })
module.exports = menu