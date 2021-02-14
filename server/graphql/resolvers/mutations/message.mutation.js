module.exports = {
    createMessage: async (parent, {data: {text, userId}}, {Message, pubSub}) => {
        try {
            const message = await new Message({text, userId}).save();
            await pubSub.publish('messageSent', {
                messageSent: message
            })
            return message
        } catch (e) {
            throw new Error(e)
        }
    }
}