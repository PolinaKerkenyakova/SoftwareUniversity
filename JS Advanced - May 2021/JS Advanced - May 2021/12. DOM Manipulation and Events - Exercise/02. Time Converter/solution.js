function attachEventsListeners() {

    let daysBtn = document.querySelector('#daysBtn');
    let daysInput = document.querySelector('#days');


    let hoursBtn = document.querySelector('#hoursBtn');
    let hoursInput = document.querySelector('#hours');

    let minutesBtn = document.querySelector('#minutesBtn');
    let minutesInput = document.querySelector('#minutes');


    let secondsBtn = document.querySelector('#secondsBtn');
    let secondsInput = document.querySelector('#seconds');

    daysBtn.addEventListener('click', function (e) {
        let days = daysInput.value;

        hoursInput.value = days * 24;
        minutesInput.value = days * 24 * 60;
        secondsInput.value = days * 24 * 60 * 60;
    });

    hoursBtn.addEventListener('click', function (e) {
        let hours = hoursInput.value;

        daysInput.value = hours / 24;
        minutesInput.value = hours * 60;
        secondsInput.value = hours * 60 * 60;
    });

    minutesBtn.addEventListener('click', function (e) {
        let minutes = minutesInput.value;

        daysInput.value = minutes / 24 / 60;
        hoursInput.value = minutes / 60;
        secondsInput.value = minutes * 60;
    });

    secondsBtn.addEventListener('click', function (e) {
        let seconds = secondsInput.value;

        daysInput.value = seconds / 60 / 60 / 24;
        hoursInput.value = seconds / 60 / 60;
        minutesInput.value = seconds / 60;
    });
}