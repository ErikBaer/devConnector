const express = require('express');
const router = express.Router();
const {
    check,
    validationResult
} = require('express-validator');
const auth = require('../../middleware/auth');

const Post = require('../../models/Post');
const User = require('../../models/User');

//@route    POST api/post
//@desc     Create a Post
//@access   Private
router.get('/', auth, async (req, res) => {

});

module.exports = router;