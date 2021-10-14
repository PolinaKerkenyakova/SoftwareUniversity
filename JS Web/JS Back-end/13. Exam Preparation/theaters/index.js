const express = require('express');

const { PORT } = require('./config');
const databaseConfig = require('./config/database.js');
const expressConfig = require('./config/express.js');
const routesConfig = require('./config/routes.js');

// const userService = require('./services/user.js');
// const authMiddleware = require('./middlewares/auth.js');

start();

async function start() {
    const app = express();

    await databaseConfig(app);
    expressConfig(app);
    routesConfig(app)

    app.listen(PORT, () => {
        // testAuth();
        console.log(`App started at http://localhost:${PORT}`)
    });
};


// async function testAuth() {

//     // try {
//     //     // const result = await userService.createUser('Peter', 'asdasd');
//     //     // console.log(result);

//     //     const user = await userService.getUserByUsername('peter');
//     //     console.log(user);

//     // } catch (err) {
//     //     console.log('Error:', err.message);
//     // }

//     const reqMock = {};
//     const resMock = {
//         cookie() {
//             console.log('Set cookie', arguments);
//         }
//     };
//     const nextMock = () => { };

//     try {
//         const auth = authMiddleware();
//         auth(reqMock, resMock, nextMock);

//         await reqMock.auth.login('john', 'asdfgh');

//     } catch (err) {
//         console.log('Error:', err.message);
//     }
// } 
