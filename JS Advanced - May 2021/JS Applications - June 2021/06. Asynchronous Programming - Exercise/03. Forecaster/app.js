function attachEvents() {
    document.querySelector('#submit').addEventListener('click', getLocation);
}

const getLocation = () => {
    let location = document.querySelector('#location').value;
    fetch('http://localhost:3030/jsonstore/forecaster/locations')
    .then(response => response.json())
    .then(data => {
        data.forEach(city => {
            if (city.name === location) {
                getCurrentWeather(city.code);
                getUpcomingWeather(city.code);
            }
        });
    })
    .catch(error => {
       document.querySelector('#forecast').textContent = 'Error';
    })
}

const getCurrentWeather = (code) => {
    fetch()
}

attachEvents();
