const express = require('express');
const router = express.Router();
const {
    check,
    validationResult
} = require('express-validator')

//@route    POST api/users
//@desc     register user
//@access   Public 
router.post('/', [
        check('name', 'Please enter your name!')
        .not()
        .isEmpty()
        check('email', 'Please include a valid email').isEmail()
        check('password', 'Please enter a password with min 6 characters').isLength({
            min: 6
        })
    ],
    (req, res) => {
        const errors = valid
        console.log(req.body)
    });

module.exports = router;