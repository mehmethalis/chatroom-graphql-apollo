const User = {
    messages: async (parent, args, {Message}) => {
        return (await Message.find({userId: parent._id}));
    }
}
module.exports = User;