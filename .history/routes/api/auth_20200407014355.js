const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const user = require('../../models/User');
const bcrypt = require('bcryptjs')
const {
    check,
    validationResult
} = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');

//@route    GET api/auth
//@desc     Test route
//@access   Public 
router.get('/', auth, async (req, res) => {

    try {

        const user = await User.findById(req.user.id).select('-password');
        res.json(user);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

//@route    POST api/auth
//@desc     Authenticate User & get token
//@access   Public
router.post(
    '/',
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            });
        }

        const {
            email,
            password
        } = req.body;

        try {
            // Check if User exists

            let user = await User.findOne({
                email: email
            });

            if (!user) {
                return res.status(400).json({
                    errors: [{
                        msg: 'User not found'
                    }]
                });
            }

            //Check Password

            const isMatch = await bcrypt.compare(password, user.password)

            // Return jsonwebtoken

            const payload = {
                user: {
                    id: user.id,
                },
            };

            jwt.sign(
                payload,
                config.get('jwtSecret'), {
                    expiresIn: 360000
                },
                (err, token) => {
                    if (err) throw err;
                    res.json({
                        token
                    });
                }
            );

            console.log(req.body);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

module.exports = router;