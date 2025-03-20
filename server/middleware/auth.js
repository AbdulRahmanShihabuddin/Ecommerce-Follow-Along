const jwt = require('jsonwebtoken')
const secretKey = ''
const encrypt = (payload) =>{
    return jwt.sign(payload, secretKey, {algorithm: 'HS256', expiresIn:'2h'})
}
const decrypt = (token) => {
    try {
        return jwt.verify(token, secretKey)
    } catch (error) {
        if (error.name == 'TokenExpiredError'){
            console.error("Token has expired")
        }
        else{
            console.error('Invalid token:', error.message)
        }
        return null
    }
}

module.exports = { encrypt, decrypt}