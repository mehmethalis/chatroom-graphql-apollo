const jwt = require('jsonwebtoken');

const Token = {
    generate: ({userName}, expiresIn) => {
        return jwt.sign({userName}, process.env.JWT_SECRET, {expiresIn})
    }
}
module.exports = Token;