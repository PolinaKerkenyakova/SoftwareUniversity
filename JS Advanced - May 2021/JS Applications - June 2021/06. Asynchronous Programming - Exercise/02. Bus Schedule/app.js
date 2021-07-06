function solve() {

    let stopInfoSpan = document.querySelector('#info .info');
    let departBtn = document.querySelector('#depart');
    let arriveBtn = document.querySelector('#arrive');
    let stop = {
        next: 'depot',
    }

    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${stop.next}`)
            .then(response => response.json())
            .then(data => {
                stop = data;
                stopInfoSpan.textContent = `Next stop ${stop.name}`;
                departBtn.disabled = true;
                arriveBtn.disabled = false;
            });
    }

    function arrive() {
        stopInfoSpan.textContent = `Arriving at ${stop.name}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();