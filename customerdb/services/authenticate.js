const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const user = require('../db/users')

const login = (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const loginUser = user.getUserByEmail(email, (user) => {
        if (user.length !== 0) {
            const hashpw = user[0].password
            // create token
            const token = jwt.sign({userId: email}, process.env.SECRET_KEY)
            // compare token
            if (bcrypt.compareSync(password, hashpw)) res.send({token}) 
            else res.sendStatus(400).end()
            
        } else res.sendStatus(400).end()
    })
}

const authenticate = (req, res, next) => {
    const token = req.header('Authorization')
    if (!token) res.sendStatus(400).end()

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) res.sendStatus(400).end()
        else next()
    })
}

module.exports = {
    authenticate,
    login
}