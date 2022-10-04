const {User, Post} = require('../models');

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({error});
    }
}

const createPost = async (req, res) => {
    try {
        const newPost = await Post.create(req.body);

        await User.findOneAndUpdate(
            {
                username: req.body.username
            },
            {
                $push: {
                    posts: newPost._id,
                }
            }
        );
    } catch (error) {
        res.status(500).json({error});
    }
}

module.exports = {
    getPosts,
    createPost,
};