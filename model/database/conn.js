const Sequelize = require('sequelize')

const conn = new Sequelize('divini', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    conn: conn
}