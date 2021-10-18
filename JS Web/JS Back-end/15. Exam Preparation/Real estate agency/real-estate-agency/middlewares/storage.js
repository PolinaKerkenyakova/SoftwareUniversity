const housing = require('../services/housing.js')

module.exports = () => (req, res, next) => {
    // TODO import and decorate services
    req.storage = {
        ...housing
    };

    next();
}