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