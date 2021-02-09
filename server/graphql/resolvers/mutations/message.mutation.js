module.exports = {
    createMessage: async (parent, {data: {text, userId}}, {Message}) => {
        return new Message({text, userId}).save();
    }
}