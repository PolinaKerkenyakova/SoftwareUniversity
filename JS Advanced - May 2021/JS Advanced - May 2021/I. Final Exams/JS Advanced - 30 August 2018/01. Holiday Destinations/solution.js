function addDestination() {
    let cityField = [...document.querySelectorAll('#input input')][0];
    let countryField = [...document.querySelectorAll('#input input')][1];
    let season = document.querySelector('#seasons');

    if (!cityField.value || !countryField.value) {
        return;
    }

    // Seasons
    let summer = document.querySelector('#summer');
    let autumn = document.querySelector('#autumn');
    let winter = document.querySelector('#winter');
    let spring = document.querySelector('#spring');

    let summerCount = Number(summer.value);
    let autumnCount = Number(autumn.value);
    let winterCount = Number(winter.value);
    let springCount = Number(spring.value);

    if (season.value === 'summer') {
        summerCount += 1
        summer.value = summerCount;
    } else if (season.value === 'autumn') {
        autumnCount += 1;
        autumn.value = autumnCount;
    } else if (season.value === 'winter') {
        winterCount += 1;
        winter.value = winterCount;
    } else if (season.value === 'spring') {
        springCount += 1;
        spring.value = springCount;
    }

    let tbody = document.querySelector('#destinationsList');
    let tr = document.createElement('tr');

    let tdDestination = document.createElement('td');
    tdDestination.textContent = `${cityField.value}, ${countryField.value}`;

    let tdSeason = document.createElement('td');
    let seasonText = season.value[0].toUpperCase() + season.value.slice(1);
    tdSeason.textContent = `${seasonText}`;

    tr.appendChild(tdDestination);
    tr.appendChild(tdSeason);

    tbody.appendChild(tr);

    cityField.value = '';
    countryField.value = '';
}