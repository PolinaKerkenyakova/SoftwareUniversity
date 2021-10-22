const Trip = require('../models/Trip.js');
const User = require('../models/User.js');

async function createTrip(tripData) {
    const trip = await new Trip(tripData);
    return await trip.save();
}

async function getAllTrips() {
    const trips = await Trip.find({}).lean();
    return trips;
}

async function getTripById(id) {
    const trip = await Trip.findById(id).lean();
    return trip;
}

async function addPassenger(tripId, passengerId) {
    const trip = await Trip.findById(tripId);

    trip.buddies.push(passengerId);
    return trip.save();
}

async function deleteTrip(id) {
    console.log('deleted');

    return await Trip.findByIdAndDelete(id);
}

async function editTrip(tripId, tripData) {
    let trip = await Trip.findById(tripId);

    trip.startPoint = tripData.startPoint;
    trip.endPoint = tripData.endPoint;
    trip.date = tripData.date;
    trip.time = tripData.time;
    trip.carImage = tripData.carImage;
    trip.carBrand = tripData.carBrand;
    trip.seats = tripData.seats;
    trip.price = tripData.price;
    trip.description = tripData.description;

    trip.save()
}


async function getBuddyEmails(ids) {

    const records = await User.find().where('_id').in(ids).exec();
    return records;
}

async function getUserTrips(ids) {
    const trips = await Trip.find().where('_id').in(ids).lean().exec();
    return trips;
}

module.exports = {
    createTrip,
    getAllTrips,
    getTripById,
    addPassenger,
    deleteTrip,
    editTrip,
    getBuddyEmails,
    getUserTrips
}