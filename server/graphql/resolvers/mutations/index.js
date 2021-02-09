const UserMutations = require('./user.mutation');
const MessageMutations = require('./message.mutation');

const Mutation = {
    ...UserMutations,
    ...MessageMutations
}

module.exports = Mutation;