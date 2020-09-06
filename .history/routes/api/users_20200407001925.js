const express = require('express');
const router = express.Router();
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
            let user = User.findOne({
                email: email
            });



            // Get user gravatar

            //encrypt password

            // Return jsonwebtoken

            console.log(req.body);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error')
        }


    });




module.exports = router;