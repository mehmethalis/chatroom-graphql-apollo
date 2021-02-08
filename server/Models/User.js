const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcyrpt = require('bcrypt');

const UserSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

UserSchema.pre('save', function (next) {
    if (!this.isModified('password')) {
        return next()
    }

    bcyrpt.hash(this.password, 10).then(hash => {
        this.password = hash
        next();
    })
})

module.exports = mongoose.model('user', UserSchema);