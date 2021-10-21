const homeController = require('../controllers/homeController.js');
const authController = require('../controllers/authController.js');
const courseController = require('../controllers/courseController.js');
const searchController = require('../controllers/searchController.js');

module.exports = (app) => {
    app.use('/', homeController)
    app.use('/auth', authController);
    app.use('/course', courseController);
    app.use('/search', searchController);
};