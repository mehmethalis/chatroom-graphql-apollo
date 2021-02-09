const Message = {
    user: async (parent, args, {User}) => {
        return (await User.findById(parent.userId));
    }
}
module.exports = Message;