const {withFilter} = require('apollo-server-express');

module.exports = {
    messageSent: {
        subscribe: withFilter((parent, args, {pubSub}) => {
                return pubSub.asyncIterator('messageSent');
            },
            (payload, variables) => {
                return variables.userId ? String(payload.messageSent.userId) === variables.userId : true;
            })
    }
}