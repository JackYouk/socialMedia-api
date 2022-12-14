const router = require('express').Router();

const {
    getPosts,
    createPost,
} = require('../../controllers/postController');

router.route('/')
    .get(getPosts)
    .post(createPost)

module.exports = router;