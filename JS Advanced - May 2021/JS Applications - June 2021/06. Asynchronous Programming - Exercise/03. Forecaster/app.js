function attachEvents() {
    document.querySelector('#submit').addEventListener('click', getLocation);
}

const getLocation = () => {
    let city = document.querySelector('#location').value;
    fetch('http://localhost:3030/jsonstore/forecaster/locations')
        .then(response => response.json())
        .then(data => {
            const location = data.find(l => l.name === city)
            if (location) {
                getCurrentWeather(location.code);
                getUpcomingWeather(location.code);
            } else {
                throw new Error();
            }
        })
        .catch(error => {
            
        });
}

const getCurrentWeather = (code) => {
    fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`)
        .then(response => response.json())
        .then(data => weatherHTMLTemplate().currentWeather(data));
}

const getUpcomingWeather = (code) => {
    fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`)
        .then(response => response.json())
        .then(data => weatherHTMLTemplate().upcomingWeather(data));
}

const weatherHTMLTemplate = () => {
    let weatherSymbols = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂'
    }

    document.querySelector('#forecast').style.display = 'block';

    const currentWeather = (data) => {
        // Main div
        let div = document.createElement('div');
        div.classList.add('forecasts');

        // Wheather icon
        let spanSymbol = document.createElement('span');
        spanSymbol.classList.add('condition', 'symbol');
        spanSymbol.textContent = `${weatherSymbols[data.forecast.condition]}`;

        // Main span condition
        let spanCondition = document.createElement('span');
        spanCondition.classList.add('condition');

        // Main span condition children
        let spanCity = document.createElement('span');
        spanCity.classList.add('forecast-data');
        spanCity.textContent = `${data.name}`;

        let tempCity = document.createElement('span');
        tempCity.classList.add('forecast-data');
        tempCity.textContent = `${data.forecast.low}°/${data.forecast.high}°`;

        let spanWeatherWord = document.createElement('span');
        spanWeatherWord.classList.add('forecast-data');
        spanWeatherWord.textContent = `${data.forecast.condition}`;

        spanCondition.appendChild(spanCity)
        spanCondition.appendChild(tempCity)
        spanCondition.appendChild(spanWeatherWord)

        div.appendChild(spanSymbol)
        div.appendChild(spanCondition);

        document.querySelector('#current').appendChild(div);
    }

    const upcomingWeather = (data) => {
        // Main div
        let div = document.createElement('div');
        div.classList.add('forecast-info');

        data.forecast.forEach(day => {
            // Main span
            let spanUpcoming = document.createElement('span');
            spanUpcoming.classList.add('upcoming')

            // Main span children
            let symbolSpan = document.createElement('span');
            symbolSpan.classList.add('symbol');
            symbolSpan.textContent = `${weatherSymbols[day.condition]}`

            let tempSpan = document.createElement('span');
            tempSpan.classList.add('forecast-data');
            tempSpan.textContent = `${day.low}°/${day.high}°`

            let weatherWordSpan = document.createElement('span');
            weatherWordSpan.classList.add('forecast-data');
            weatherWordSpan.textContent = `${day.condition}`;

            spanUpcoming.appendChild(symbolSpan);
            spanUpcoming.appendChild(tempSpan);
            spanUpcoming.appendChild(weatherWordSpan);

            div.appendChild(spanUpcoming);
        });
        document.querySelector('#upcoming').appendChild(div);
    }

    return {
        currentWeather,
        upcomingWeather
    }
}

attachEvents();
