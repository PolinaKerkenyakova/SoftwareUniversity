const homeController = require('../controllers/homeController.js');
const authController = require('../controllers/authController.js');
const tripController = require('../controllers/tripController.js');
const errorController = require('../controllers/errorController.js');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/trip', tripController);
    app.use('*', errorController);
};