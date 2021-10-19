const cources = require('../services/cources.js');

module.exports = () => (req, res, next) => {
    // TODO import and decorate services
    req.storage = {
        ...cources
    };

    next();
}