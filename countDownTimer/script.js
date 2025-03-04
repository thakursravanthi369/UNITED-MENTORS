let countdownInterval;

function startCountdown() {
    clearInterval(countdownInterval);
    const targetTime = new Date(document.getElementById('targetTime').value).getTime();
    if (isNaN(targetTime)) {
        document.getElementById('countdown').innerHTML = "Please select a valid date and time.";
        return;
    }

    countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = targetTime - now;
        
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = "Time's up!";
            document.getElementById('countdown').classList.add('expired');
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        document.getElementById('countdown').classList.remove('expired');
    }, 1000);
}