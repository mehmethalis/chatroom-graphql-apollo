const Query = {
    user: async (parent, args, {User}) => {
        return (await User.findById(args.id));
    },
    users: async (parent, args, {User}) => {
        return (await User.find({}).sort({'createdAt': 'desc'}))
    },
    activeUser: async (parent, args, {activeUser, User}) => {
        if (!activeUser) return null;
        return (await User.findOne({userName: activeUser.userName}))
    },
    message: async (parent, args, {Message}) => {
        return (await Message.findById(args.id))
    },
    messages: async (parent, args, {Message}) => {
        return (await Message.find({}).sort({'createdAt': 'desc'}))
    }
}
module.exports = Query;