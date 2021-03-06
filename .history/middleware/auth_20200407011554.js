const jwt = require('jsonwebtoken');
const config = require('config');


module.exports = funtion(req, res, next) {
    // Get token from header
    const token = req.header('x-auth-token');

    //Check if no token

    if (!token) {
        return res.status(401).json({
            msg: 'No token, authorization denied'
        });
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'))
    } catch (err) {

    }
}