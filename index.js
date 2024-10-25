function updateCountdown() {
    const now = new Date();
    let target = new Date();

    target.setHours(2, 0, 0, 0);

    if (now.getDay() >= 6 && now.getHours() >= 1) {
        document.getElementById("countdown").style.display = "none";
        document.getElementById("message").style.display = "block";
        target.setDate(target.getDate() + ((8 - now.getDay()) % 7));
    } else if (now.getDay() < 6 || (now.getDay() === 6 && now.getHours() < 1)) {
        target.setDate(now.getDate() + (6 - now.getDay()));
        document.getElementById("countdown").style.display = "block";
        document.getElementById("message").style.display = "none";
    }

    const timeDiff = target - now;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeDiff < 0) {
        clearInterval(countdownInterval);
        updateCountdown();
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();