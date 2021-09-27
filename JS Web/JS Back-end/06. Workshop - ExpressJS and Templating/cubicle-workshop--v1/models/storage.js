const { query } = require('express');
const fs = require('fs/promises');
const { exit } = require('process');
const uniqid = require('uniqid');

let data = {};

// Model structure

// "asdf213": {
//     "name": "string",
//     "description": "string",
//     "imageUrl": "string",
//     "diffuculty": "number"
// }

async function init() {
    try {
        data = JSON.parse(await fs.readFile('./models/data.json'));
    } catch (err) {
        console.error('Error reading database');
    }

    return (req, res, next) => {
        req.storage = {
            getAll,
            getById,
            create,
            edit
        };

        next();
    }
}

async function getAll(query) {
    let cubes = Object.entries(data)
        .map(([id, v]) => Object.assign({}, { id }, v));

    if (query.search) {
        cubes = cubes.filter(c => c.name.toLowerCase().includes(query.search.toLowerCase()));
    }

    if (query.from) {
        cubes = cubes.filter(c => c.difficultyLevel >= Number(query.from));
    }

    if (query.to) {
        cubes = cubes.filter(c => c.difficultyLevel <= Number(query.to));
    }

    return cubes;
}

async function getById(id) {
    const cube = data[id];

    if (cube) {
        return Object.assign({}, { id }, cube);
    } else {
        return undefined;
    }
}

async function create(cube) {
    let id = uniqid();
    data[id] = cube;

    await persist();
}

async function edit(id, cube) {
    if (!data[id]) {
        throw new ReferenceError('This cube doedn\'t exist');
    }

    data[id] = cube;

    await persist();
}

async function persist() {
    try {
        fs.writeFile('./models/data.json', JSON.stringify(data, null, 2));
        console.log('new cube created');
    } catch (err) {
        console.error('Error writing out database');
    }
}

module.exports = {
    init,
    getAll,
    getById,
    create,
    edit
}