const jwt = require('jsonwebtoken')
const { promisify } = require('util')

module.exports = {
    eAdmin: async(req, res, next) => {
        const authHeader = req.headers.authorization
        if (!authHeader) {
            return res.status(400).json({
                erro: true,
                mensagem: 'Erro  necessário realizar o login para acessar! Falta token! A'
            })
        }
        const [, token] = authHeader.split(' ')
        console.log('Token ' + token)
        if (!token) {
            return res.status(400).json({
                erro: true,
                mensagem: 'Erro necessário realizar o login para acessar a página, falta o token B'
            })
        }
        try {
            const decode = await promisify(jwt.verify)(token, 'ASD4ASDAS5D4SAD2ASDSADS8F5')
            req.userId = decode.id
            req.userName = decode.name
            return next()
        } catch (err) {
            return res.status(400).json({
                erro: true,
                mensagem: 'Token Invalido'
            })
        }

    }
}