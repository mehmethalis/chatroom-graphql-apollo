const bcrypt = require('bcrypt');
const Token = require('../../../helpers/Token');

module.exports = {
    createUser: async (parent, {data: {userName, password}}, {User}) => {
        const user = await User.findOne({userName})
        if (user) {
            throw new Error('User already exists.');
        }

        const newUser = await new User({userName, password}).save();
        return {token: Token.generate(newUser, '1h')}

    },
    signIn: async (parent, {data: {userName, password}}, {User}) => {
        const user = await User.findOne({userName});
        if (!user) {
            throw new Error("User not found!")
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            throw new Error("Password is incorrect!")
        }

        return {token: Token.generate(user, '1h')}
    }
}