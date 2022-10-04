const {Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            trim: true,
            required: [true, 'username pls'],
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'email pls'],
        },
        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
        id: false,
    },
);

module.exports = model('User', userSchema);