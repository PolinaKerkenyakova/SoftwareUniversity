const Housing = require('../models/Housing.js');


async function createHousing(housingData) {
    const housing = new Housing(housingData);

    await housing.save();

    return housing;
}


async function getHousingById(id) {
    const housing = await Housing.findById(id).lean();

    return housing;
}


module.exports = {
    createHousing,
    getHousingById
}