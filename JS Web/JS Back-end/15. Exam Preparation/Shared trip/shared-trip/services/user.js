const User = require('../models/User.js')

async function createUser(email, hashedPassword, gender) {
    const user = new User({
        email,
        hashedPassword,
        gender
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

async function addTrip(userId, tripId) {
    const user = await User.findById(userId);
    await user.tripsHistory.push(tripId);
    user.save();
}

// TODO add function for finding user by other properties, as specific in the project requirements e.g finding user by email

module.exports = {
    createUser,
    getUserByEmail,
    getUserById,
    addTrip
}