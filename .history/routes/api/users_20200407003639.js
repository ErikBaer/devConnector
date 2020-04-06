const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs')
const {
    check,
    validationResult
} = require('express-validator')

const User = require('../../models/User')


//@route    POST api/users
//@desc     register user
//@access   Public 
router.post('/', [
        check('name', 'Please enter your name!')
        .not()
        .isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Please enter a password with min 6 characters').isLength({
            min: 6
        })
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        }

        const {
            name,
            email,
            password
        } = req.body;

        try {

            // Check if User exists

            let user = User.findOne({
                email: email
            });

            if (user) {
                res.status(400).json({
                    errors: [{
                        msg: 'User already exists'
                    }]
                });
            }

            // Get user gravatar

            const avatar = gravatar.url(email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            })

            // Create Instance of User

            user = new User({
                name,
                email,
                avatar,
                password
            })

            //Encrypt password

            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password, salt);

            // Save User

            await user.save();

            // Return jsonwebtoken
            res.send('User registered')
            console.log(req.body);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error')
        }


    });




module.exports = router;