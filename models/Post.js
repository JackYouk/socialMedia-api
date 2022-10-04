const {Schema, model} = require('mongoose');

const postSchema = new Schema(
    {
        postText: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    },
);

module.exports = model('Post', postSchema);
