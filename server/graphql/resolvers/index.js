// query resolvers
const Query = require('./queries/Query');
const Message =require('./queries/Message');
const User = require('./queries/User');

//mutation resolvers
const Mutation = require('./mutations/index');

module.exports = {
    Query,
    Message,
    User,
    Mutation
};