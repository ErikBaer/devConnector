const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const user = require('../../models/User')

//@route    GET api/auth
//@desc     Test route
//@access   Public 
router.get('/', auth, async (req, res) => {

    try {

        const user = await User.findById(req.user.id).select('-password');
        res.json(user);

    } catch (err) {

    }
});

module.exports = router;