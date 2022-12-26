function attachEventsListeners() {
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    let rotaion = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    document.getElementById('daysBtn').addEventListener('click',onConvert);
    document.getElementById('hoursBtn').addEventListener('click',onConvert);
    document.getElementById('minutesBtn').addEventListener('click',onConvert);
    document.getElementById('secondsBtn').addEventListener('click',onConvert);

    function convert(value,unit) {
       let days = value / rotaion[unit];

       return {
        days:days,
        hours:days*rotaion.hours,
        minutes:days*rotaion.minutes,
        seconds:days*rotaion.seconds

       }
    } 

    function onConvert(ev){
       const input = ev.target.parentElement.querySelector('input[type="text"]');
       let time = convert(Number(input.value),input.id);
       
       days.value = time.days;
       hours.value = time.hours;
       minutes.value = time.minutes;
       seconds.value = time.seconds
    }
}