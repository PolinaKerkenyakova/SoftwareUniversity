const User = require('../models/User.js')
const Post = require('../models/Post');

async function createUser(firstName, lastName, email, hashedPassword) {
    // TODO adapt properties to project requirements
    const user = new User({
        firstName, lastName, email, hashedPassword
    });

    await user.save();

    return user;
}

async function getUserByEmail(email) {
    const pattern = new RegExp(`^${email}$`, 'i')
    const user = await User.findOne({ email: { $regex: pattern } })

    return user;
}


async function getUserById(id) {

    const user = await User.findById(id).lean();

    return user;
}

async function getUsersById(ids) {
    const users = await User.find({ '_id': { $in: ids } }).lean();
    return users;
}

async function getUserPosts(userId) {
    const user = await User.findById(userId);

    const posts = await Post.find({ '_id': { $in: user.myPosts } }).lean();
    return posts;
}
// TODO add function for finding user by other properties, as specific in the project requirements e.g finding user by email

module.exports = {
    createUser,
    getUserByEmail,
    getUserById,
    getUserPosts,
    getUsersById

}