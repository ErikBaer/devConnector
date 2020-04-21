const express = require('express');
const router = express.Router();
var fs = require('fs');
var readline = require('readline');
var { google } = require('googleapis');
var OAuth2 = google.auth.OAuth2;

router.get('/', auth, async (req, res) => {

    return console.log('power')
}