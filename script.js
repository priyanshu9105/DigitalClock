// --- 1. DIGITAL CLOCK LOGIC ---
function updateClock() {
    const now = new Date();
    
    // Format options for a clean string (HH:MM:SS AM/PM)
    const timeString = now.toLocaleTimeString();
    
    // Update the DOM
    document.getElementById('digital-clock').textContent = timeString;
}

// --- 2. COUNTDOWN TIMER LOGIC ---
// Target date: Next January 1st
const currentYear = new Date().getFullYear();
const targetDate = new Date(`Jan 1, ${currentYear + 1} 00:00:00`).getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Pad single digits with a leading zero for visual consistency
    const format = (num) => String(num).padStart(2, '0');

    const countdownDisplay = document.getElementById('countdown');

    // If the countdown is finished
    if (difference < 0) {
        countdownDisplay.textContent = "Happy New Year! 🎉";
        clearInterval(countdownInterval);
    } else {
        countdownDisplay.textContent = `${format(days)}d ${format(hours)}h ${format(minutes)}m ${format(seconds)}s`;
    }
}

// --- 3. ASYNCHRONOUS EXECUTION ---
// Run functions immediately on load so the screen isn't blank for the first second
updateClock();
updateCountdown();

// Set intervals to repeat the functions every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);
const countdownInterval = setInterval(updateCountdown, 1000);