const User = require('../models/User.js')

async function createUser(username, hashedPassword) {
    // TODO adapt properties to project requirements
    const user = new User({
        username,
        hashedPassword,
        likedPlays: []
    });

    await user.save();

    return user;
}

async function getUserByUsername(username) {
    const pattern = new RegExp(`^${username}$`, 'i')
    const user = await User.findOne({username: {$regex: pattern}})

    return user;
}

// TODO add function for finding user by other properties, as specific in the project requirements e.g finding user by email

module.exports = {
    createUser,
    getUserByUsername
}