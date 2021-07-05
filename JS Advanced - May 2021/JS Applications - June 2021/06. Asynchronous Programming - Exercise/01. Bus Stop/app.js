function getInfo() {
    document.querySelector('#buses').innerHTML = '';
    let stopId = document.querySelector('#stopId').value;
    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`)
        .then(response => response.json())
        .then(data => {
            busName(data.name);
            addLi(data.buses);
        })
        .catch(error => {
            busName('Error');
        });
}

const busName = (input) => document.querySelector('#stopName').textContent = input;

const addLi = (busesObj) => {
    Object.entries(busesObj).map(([bus, minutes]) => {
        const li = document.createElement('li');
        li.textContent = `Bus ${bus} arrives in ${minutes} minutes`;
        document.querySelector('#buses').appendChild(li);
    });
}