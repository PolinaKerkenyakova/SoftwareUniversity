const homeController = require('../controllers/homeController.js')
const authController = require('../controllers/authController.js');
const housingForRentController = require('../controllers/housingForRentController.js');
const searchController = require('../controllers/searchController.js');
const housingController = require('../controllers/housingController.js')

module.exports = (app) => {
    app.use('/', homeController)
    app.use('/auth', authController)
    app.use('/housing-for-rent', housingForRentController);
    app.use('/search', searchController);
    app.use('/housing', housingController)
};