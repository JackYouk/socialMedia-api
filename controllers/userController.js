const {User, Thought} = require('../models');

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({error});
    }
}

const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } catch (error) {
        res.status(500).json({error});
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
            .populate('posts');
        res.json(user);
    } catch (error) {
        res.status(500).json({error});
    }
}

module.exports = {
    getUsers,
    createUser,
    getUserById,
};