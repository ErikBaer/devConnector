const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')
//@route    GET api/profile/me
//@desc     Get current users profile
//@access   private
router.get('/', auth, (req, res) => res.send('Profile route'));

module.exports = router;