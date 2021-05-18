function roadRadar(speed, area) {

    let isSpeeding = false;
    let speedingWith = 0
    let speedLimit = 0;

    if (area === 'motorway') {
        speedLimit = 130;

        if (speed > 130) {
            isSpeeding = true;
            speedingWith = speed - 130;
        }

    } else if (area === 'interstate') {
        speedLimit = 90;

        if (speed > 90) {
            isSpeeding = true;
            speedingWith = speed - 90;
        }

    } else if (area === 'city') {
        speedLimit = 50;

        if (speed > 50) {
            isSpeeding = true;
            speedingWith = speed - 50;
        }

    } else if (area === 'residential') {
        speedLimit = 20;

        if (speed > 20) {
            isSpeeding = true;
            speedingWith = speed - 20;
        }
    }

    let status = '';

    if (speedingWith > 40) {
        status = 'reckless driving'
    } else if (speedingWith <= 40 && speedingWith > 20) {
        status = 'excessive speeding';
    } else if (speedingWith <= 20 && speedingWith > 0) {
        status = 'speeding'
    }

    if (isSpeeding) {
        console.log(`The speed is ${speedingWith} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');