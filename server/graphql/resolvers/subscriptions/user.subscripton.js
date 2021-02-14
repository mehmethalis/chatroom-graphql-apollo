module.exports = {
    user: {
        subscribe: (parent, args, {pubSub}) => pubSub.asyncIterator('user')
    }
}