const Housing = require('../models/Housing.js');


async function createHousing(housingData) {
    const housing = new Housing(housingData);

    await housing.save();

    return housing;
}

async function getAllHousings() {

    const housing = await Housing.find({}).lean();
    return housing;
}

async function getLastThreeHousings() {
    const housings = await Housing.find({}).sort({ createdAt: -1 }).limit(3).lean();
    return housings;
}


async function getHousingById(id) {
    const housing = await Housing.findById(id).lean();

    return housing;
}

async function deleteHousingById(id) {
    return Housing.deleteOne(id);
}

async function editHousing(id, housingData) {
    const housing = await Housing.findById(id);

    housing = housingData;
    housing.save();
}


module.exports = {
    createHousing,
    getHousingById,
    getAllHousings,
    getLastThreeHousings,
    deleteHousingById,
    editHousing,
}