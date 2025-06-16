function attachEventsListeners() {
    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', convertFromDays);
    hoursBtn.addEventListener('click', convertFromHours);
    minutesBtn.addEventListener('click', convertFromMinutes);
    secondsBtn.addEventListener('click', convertFromSeconds);

    function convertFromDays() {
        const days = Number(document.getElementById('days').value);
        const hours = days * 24;
        const minutes = hours * 60;
        const seconds = minutes * 60;

        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
    }

    function convertFromHours() {
        const hours = Number(document.getElementById('hours').value);
        const days = hours / 24;
        const minutes = hours * 60;
        const seconds = minutes * 60;

        document.getElementById('days').value = days;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
    }

    function convertFromSeconds() {
        const seconds = Number(document.getElementById('seconds').value);
        const minutes = seconds / 60;
        const hours = minutes / 60;
        const days = hours / 24;

        document.getElementById('days').value = days;
        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = minutes;
    }

    function convertFromMinutes() {
        const minutes = Number(document.getElementById('minutes').value);
        const hours = minutes / 60;
        const days = hours / 24;
        const seconds = minutes * 60;

        document.getElementById('days').value = days;
        document.getElementById('hours').value = hours;
        document.getElementById('seconds').value = seconds;
    }
}
