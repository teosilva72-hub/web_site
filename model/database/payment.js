const conn = require('./conn')
const payment = conn.conn.define('payment', {
    nome: {
        type: conn.Sequelize.STRING
    },
    valor: {
        type: conn.Sequelize.DOUBLE
    }
})

//criar tabela
//payment.sync({ force: true })

module.exports = payment