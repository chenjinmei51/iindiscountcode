document.addEventListener("DOMContentLoaded", function() {
    // Copy Discount Code
    document.getElementById("copyButton").addEventListener("click", function() {
        let discountCode = document.getElementById("discountCode");
        discountCode.select();
        document.execCommand("copy");
        alert("Discount code copied: " + discountCode.value);
    });

    // Countdown Timer (48-hour expiry)
    function startCountdown(duration) {
        let timer = duration, hours, minutes, seconds;
        setInterval(function () {
            hours = parseInt(timer / 3600, 10);
            minutes = parseInt((timer % 3600) / 60, 10);
            seconds = parseInt(timer % 60, 10);
            
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            
            document.getElementById("countdown").textContent = hours + ":" + minutes + ":" + seconds;
            
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

    startCountdown(48 * 3600); // 48 hours countdown
});
