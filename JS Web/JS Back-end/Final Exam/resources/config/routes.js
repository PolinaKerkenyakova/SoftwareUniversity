const authController = require('../controllers/authController.js');
const homeController = require('../controllers/homeController');
const postController = require('../controllers/postController');
const errorController = require('../controllers/errorController');
const allPostsController = require('../controllers/allPostsController');
const myPostsController = require('../controllers/myPostsController');

module.exports = (app) => {
    app.use('/auth', authController);
    app.use('/', homeController);
    app.use('/post', postController);
    app.use('/all-posts', allPostsController);
    app.use('/my-posts', myPostsController);
    app.use('*', errorController);
};