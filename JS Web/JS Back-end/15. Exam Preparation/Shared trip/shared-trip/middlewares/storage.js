const trip = require('../services/trip.js');

module.exports = () => (req, res, next) => {
    // TODO import and decorate services
    req.storage = {
        ...trip
    };

    next();
}