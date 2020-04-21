const express = require('express');
const router = express.Router();
var fs = require('fs');
var readline = require('readline');
var { google } = require('googleapis');
var OAuth2 = google.auth.OAuth2;
const auth = require('../../middleware/auth');

router.get('/', async (req, res) => {
    console.log('power')

}
)

module.exports = router;