const Play = require('../models/Play.js');

async function getAllPlays() {
    return Play.find({ public: true }).sort({ createdAt: -1 }).lean();
}

async function getPlayById(id) {
    return Play.findById(id).populate('usersLiked').lean();
}

async function createPlay(playData) {
    const pattern = new RegExp(`^${playData.title}$`, 'i')
    const existing = await Play.findOne({ title: { $regex: pattern } })

    if (existing) {
        throw new Error('Play with this name already exists');
    }

    const play = new Play(playData);

    await play.save();
    return play;
}

async function editPlay(id, playData) {
    const play = await Play.findById(id);

    play.title = playData.title;
    play.description = playData.description;
    play.imageUrl = playData.imageUrl;
    play.public = Boolean(playData.public);

    return await play.save();
    
}

async function deletePlay(id) {
    return Play.findByIdAndDelete(id);
}

async function likePlay(playId, userId) {
    const play = await Play.findById(playId);

    play.usersLiked.push(userId);
    return play.save();
}

module.exports = {
    getAllPlays,
    getPlayById,
    createPlay,
    editPlay,
    deletePlay,
    likePlay
}