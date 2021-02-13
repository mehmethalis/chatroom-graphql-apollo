const message = require('./message.subscription');
const userSub = require('./user.subscripton');


const Subscription = {
    ...message,
    ...userSub
}

module.exports = Subscription;