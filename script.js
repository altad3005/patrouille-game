document.addEventListener('DOMContentLoaded', function() {
    // Set the date of the camp
    const campDate = new Date('2025-07-15'); // Change this to your camp date

    // Function to calculate the remaining days
    function updateCountdown() {
        const now = new Date();
        const timeDifference = campDate - now;
        const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

        // Display the countdown
        document.getElementById('countdown').innerText = `Il reste ${daysRemaining} jours avant le camp !`;
    }

    // Update the countdown immediately and then every day
    updateCountdown();
    setInterval(updateCountdown, 24 * 60 * 60 * 1000); // Update every 24 hours
});