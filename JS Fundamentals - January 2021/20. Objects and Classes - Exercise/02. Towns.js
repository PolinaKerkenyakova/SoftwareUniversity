function towns(input) {

    for (const element of input) {

        const [city, latitude, longtitude] = element.split(' | ');

        const townElement = {
            town: city,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longtitude).toFixed(2),
        }

        console.log(townElement)
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);


// function towns(input) {

//     let towns = [];
//    for (let data of input) {
//        let [town, latitude, longitude] = data.split(' | ');

//        town = {
//            town,
//            latitude: Number(latitude).toFixed(2),
//            longitude: Number(longitude).toFixed(2),
//        }

//        towns.push(town);
//    }

//    for (let town of towns) {
//        console.log(town)
//    }
// }

// towns(['Sofia | 42.696552 | 23.32601',
// 'Beijing | 39.913818 | 116.363625']);