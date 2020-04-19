const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {

    } catch (err) {
        console.error(err.message);
        //Exit process with failure
        process.exit(1)
    }
}