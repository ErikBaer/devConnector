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
    check
](req, res) => {
    console.log(req.body)
});

module.exports = router;