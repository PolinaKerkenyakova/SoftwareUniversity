function attachEventsListeners() {

    let daysBtn = document.querySelector('#daysBtn');
    let hoursBtn = document.querySelector('#hoursBtn');
    let minutesBtn = document.querySelector('#minutesBtn');
    let secondsBtn = document.querySelector('#secondsBtn');

    let inputDays = document.querySelector('#days');
    let inputHours = document.querySelector('#hours');
    let inputMinutes = document.querySelector('#minutes');
    let inputSeconds = document.querySelector('#seconds');

    daysBtn.addEventListener('click', function(event) {
        let days = Number(inputDays.value);
        inputHours.value = days * 24;
        inputMinutes.value = days * 1440;
        inputSeconds.value = days * 86400;
    });

    hoursBtn.addEventListener('click', function(event) {
        let hours = Number(inputHours.value);
        inputDays.value = hours / 24;
        inputMinutes.value = hours * 60;
        inputSeconds.value = hours * 60 * 60;
    });

    minutesBtn.addEventListener('click', function(event) {
        let minutes = Number(inputMinutes.value);
        inputDays.value = minutes / 1440;
        inputHours.value = minutes / 60;
        inputSeconds.value = minutes * 60;
    });

    secondsBtn.addEventListener('click', function(event) {
        let seconds = Number(inputSeconds.value);
        inputDays.value = seconds / 86400;
        inputHours.value = seconds / 60 / 60;
        inputMinutes.value = seconds / 60;
    });
}