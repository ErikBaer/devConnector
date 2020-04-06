const express = require('express');
const router = express.Router();
const {
    check,
    validationrResult
} = require('express-validator')

//@route    POST api/users
//@desc     register user
//@access   Public 
router.post('/', (req, res) => {
    console.log(req.body)
});

module.exports = router;