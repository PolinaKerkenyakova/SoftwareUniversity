function city(name, area, population, country, postCode) {

    let city = {};

    city.name = name;
    city.area = area;
    city.population = population;
    city.country = country;
    city.postCode = postCode;

    for (let key in city) {
        console.log(`${key} -> ${city[key]}`)
    }
}

city("Sofia"," 492", "1238438", "Bulgaria", "1000");