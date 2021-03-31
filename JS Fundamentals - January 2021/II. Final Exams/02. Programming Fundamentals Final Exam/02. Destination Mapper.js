function destinationMapper(strInput) {

    let regex = /([=/])(?<destination>[A-Z][a-z]{2,})\1/g;
    let destinations = [];

    while ((validDestination = regex.exec(strInput)) !== null) {
        let destination = validDestination.groups['destination'];
        destinations.push(destination);
    }

    let travelPoints = 0;

    destinations.forEach(x => {
        travelPoints += x.length;
    });

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`)
}

// destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
// destinationMapper('ThisIs some InvalidInput');
destinationMapper('');