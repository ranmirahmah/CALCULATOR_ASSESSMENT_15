setInterval(() => {
    let hours = document.querySelector("#hours");
    let minutes = document.querySelector("#minutes");
    let seconds = document.querySelector("#seconds")
    let hour = hours.innerHTML

    let time = new Date();

    hours.innerHTML = time.getHours();
    minutes.innerHTML = time.getMinutes();
    seconds.innerHTML = time.getSeconds()

    let meridian = document.querySelector("#meridian")
    if (hour >= 12) {
        meridian.innerHTML = "PM"
    }
    if (hour > 12) {
        hour = hour - 12
        hour.innerHTML = hour
    }

    if (seconds.innerHTML < 10) {
        seconds.innerHTML = "0" + seconds.innerHTML
    }

    if (minutes.innerHTML < 10) {
        minutes.innerHTML = "0" + minutes.innerHTML
    }

    if (hours.innerHTML < 10) {
        hours.innerHTML = "0" + hours.innerHTML
    }

}, 100);

