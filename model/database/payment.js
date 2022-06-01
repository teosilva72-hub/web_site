const conn = require('./conn')
const payment = conn.conn.define('payment', {
    nome: {
        type: conn.Sequelize.STRING
    },
    senha: {
        type: conn.Sequelize.STRING
    }
})

//criar tabela
//payment.sync({ force: true })

module.exports = payment