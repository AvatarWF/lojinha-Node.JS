const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers['teste'];

    if(!token) return res.status(401).json({
        message: 'Usuário não autenticado!'
    })

    jwt.verify(token, 'segredo', (erro, decoded) => {
        
        if(erro){
            return res.status(401).json({
                message: 'Usuário não autenticado!'
            })
        }

        req.userID = decoded.id;
        next();
    })
}