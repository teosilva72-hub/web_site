const { Sequelize } = require('./conn');
const Conn = require('./conn');
const carrosel = Conn.conn.define('carrosels', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    dir: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
});
//carrosel.sync({ force: true })
module.exports = carrosel