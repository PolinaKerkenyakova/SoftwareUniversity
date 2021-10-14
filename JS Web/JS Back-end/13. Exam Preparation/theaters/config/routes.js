const authController = require('../controllers/authController.js');
const playController = require('../controllers/playController.js');
const homeController = require('../controllers/homeController.js');


module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/play', playController);
};