const playService = require('../services/play.js');

module.exports = () => (req, res, next) => {
    // TODO import and decorate services
    req.storage = {
        ...playService
    };

    next()
}