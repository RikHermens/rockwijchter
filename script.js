//timer

let launchDate = new Date("Jul 10, 2021 12:00:00").getTime();

let timer = setInterval(tick, 1000);

function tick() {
    let now = new Date().getTime();

    let t = launchDate - now;

    if (t > 0) {

        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        if (days < 10) {
            days = "0" + days;
        }

        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hours < 10) {
            hours = "0" + hours;
        }

        let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        let secs = Math.floor((t % (1000 * 60)) / 1000);
        if (secs < 10) {
            secs = "0" + secs;
        }

        let time = `${days} : ${hours} : ${minutes} : ${secs}`;

        document.querySelector(".countdown").innerText = time;


    }
}