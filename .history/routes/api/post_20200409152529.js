const express = require('express');
const router = express.Router();

//@route    POST api/post
//@desc     Create a Post
//@access   Private
router.get('/', auth, async (req, res) => res.send('Post route'));

module.exports = router;