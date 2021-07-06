function solve() {
    let departBtn = document.querySelector('#depart');
    let arriveBtn = document.querySelector('#arrive');
    let initialURL = `http://localhost:3030/jsonstore/bus/schedule/${depot}`

    function depart() {
        fetch(initialURL)
        .then(response => {
            return response.json();
        })
        .then(data => {

        })
    }

    function arrive() {
        console.log('Arrive TODO...');
    }

    return {
        depart,
        arrive
    };
}

let result = solve();