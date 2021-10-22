const router = require('express').Router();

const { isUser } = require('../middlewares/guards.js');
const { parseError } = require('../util/parsers.js');
const { addTrip } = require('../services/user.js')

router.get('/shared-trips', async (req, res) => {
    const trips = await req.storage.getAllTrips();

    res.render('trip/shared-trips', { trips });
});

router.get('/create', isUser(), (req, res) => {
    res.render('trip/create');
});

router.post('/create', isUser(), async (req, res) => {

    try {
        const trip = {
            startPoint: req.body.startingPoint,
            endPoint: req.body.endPoint,
            date: req.body.date,
            time: req.body.time,
            carImage: req.body.carImage,
            carBrand: req.body.carBrand,
            seats: req.body.seats,
            price: req.body.price,
            description: req.body.description,
            creator: req.user._id
        }

        await req.storage.createTrip(trip);

        res.redirect('/trip/shared-trips')

    } catch (err) {
        console.log(err.message);

        const ctx = {
            errors: parseError(err),
            trip: {
                startPoint: req.body.startingPoint,
                endPoint: req.body.endPoint,
                date: req.body.date,
                time: req.body.time,
                carImage: req.body.carImage,
                carBrand: req.body.carBrand,
                seats: req.body.seats,
                price: req.body.price,
                description: req.body.description,
                creator: req.user._id
            }
        }

        res.render('trip/create', ctx)
    }
});

router.get('/details/:id', async (req, res) => {
    const trip = await req.storage.getTripById(req.params.id);

    const buddyObjects = await req.storage.getBuddyEmails(trip.buddies);
    const buddyEmails = [];
    buddyObjects.forEach(b => buddyEmails.push(b.email));

    trip.isUser = Boolean(req.user);
    trip.isOwner = req.user._id == trip.creator;
    trip.isUserJoined = Boolean(trip.buddies.find(u => u == req.user._id));
    trip.areAvailableSeats = trip.seats - trip.buddies.length > 0;
    trip.availableSeats = trip.seats - trip.buddies.length;
    trip.driver = req.user.email;
    trip.buddies = buddyEmails.join(', ');

    res.render('trip/details', { trip });
});

router.get('/join/:id', isUser(), async (req, res) => {
    try {
        const trip = await req.storage.getTripById(req.params.id);

        const user = trip.buddies.find(u => u == req.user._id);

        if (user) {
            throw new Error('You already joined this drive!')
        }

        if (trip.seats - trip.buddies.length == 0) {
            throw new Error('There is no available seat, sorry!');
        }

        await req.storage.addPassenger(req.params.id, req.user._id);
        await addTrip(req.user._id, req.params.id);
        res.redirect('/trip/details/' + req.params.id);

    } catch (err) {
        console.log(err);
        res.redirect('/auth/login');
    }

});

router.get('/delete/:id', isUser(), async (req, res) => {

    try {
        const trip = await req.storage.getTripById(req.params.id);

        if (req.user._id != trip.creator) {
            throw new Error('You cannot delete a trip that you have not created!')
        }

        await req.storage.deleteTrip(req.params.id);

        console.log('deleted');
        res.redirect('/trip/shared-trips')

    } catch (err) {
        console.log(err.message);
        res.redirect('/auth/login');
    }
});

router.get('/edit/:id', isUser(), async (req, res) => {

    try {
        const trip = await req.storage.getTripById(req.params.id);

        if (req.user._id != trip.creator) {
            throw new Error('You cannot edit a trip that you have not created!')
        }

        res.render('trip/edit', { trip })

    } catch (err) {
        console.log(err.message);
        res.redirect('/auth/login');
    }
});

router.post('/edit/:id', isUser(), async (req, res) => {

    try {

        const trip = await req.storage.getTripById(req.params.id);

        if (req.user._id != trip.creator) {
            throw new Error('You cannot edit a trip that you have not created!')
        }

        const tripData = {
            startPoint: req.body.startPoint,
            endPoint: req.body.endPoint,
            date: req.body.date,
            time: req.body.time,
            carImage: req.body.carImage,
            carBrand: req.body.carBrand,
            seats: req.body.seats,
            price: req.body.price,
            description: req.body.description,
        }

        await req.storage.editTrip(req.params.id, tripData);

        res.redirect('/trip/details/' + req.params.id);
    } catch (err) {
        console.log(err.message);

        const ctx = {
            errors: parseError(err),
            trip: {
                startPoint: req.body.startPoint,
                endPoint: req.body.endPoint,
                date: req.body.date,
                time: req.body.time,
                carImage: req.body.carImage,
                carBrand: req.body.carBrand,
                seats: req.body.seats,
                price: req.body.price,
                description: req.body.description,
            }
        }
        res.render('trip/edit', ctx);
    }
});

module.exports = router;