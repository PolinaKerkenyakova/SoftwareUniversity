function destinationMapper(strInput) {

    let regex = /([=/])(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    rege
    let destinations = [];
    let travelPoints = 0;

    while ((validDestination = regex.exec(strInput)) !== null) {
        let destination = validDestination.groups['destination'];

        travelPoints += destination.length
        destinations.push(destination);
    }

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`)
}

destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
destinationMapper('ThisIs some InvalidInput');