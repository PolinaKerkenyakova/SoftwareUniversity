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
    let housing = await Housing.findById(id);

    housing.name = housingData.name;
    housing.type = housingData.type;
    housing.year = housingData.year;
    housing.city = housingData.city;
    housing.homeImage = housingData.homeImage;
    housing.description = housingData.description;
    housing.availablePieces = housingData.availablePieces;
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