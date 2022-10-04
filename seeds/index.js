require('dotenv').config();

const {User, Post} = require('../models');

// seeds
const users = require('./users');
const posts = require('./posts');

const mongoose = require('mongoose');

const seeder = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        await Post.deleteMany();
        await User.deleteMany();

        await User.insertMany(users);

        const newPosts = await Post.insertMany(posts);

        for(const post of newPosts){
            await User.findOneAndUpdate(
                {
                    username: post.username
                },
                {
                    $push: {
                        posts: post._id
                    }
                },
                {
                    new: true
                }
            );
        }
    } catch (error) {
        console.log(error);
    }
    process.exit(0);
}

seeder();