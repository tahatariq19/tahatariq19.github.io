console.log("Welcome to the mainframe.");

// A simple clock to add a dynamic Y2K touch
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        clockElement.innerHTML =  h + ":" + m + ":" + s;
    }
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

document.addEventListener('DOMContentLoaded', (event) => {
    // We'll add a clock to the footer
    const footer = document.querySelector('footer p');
    if(footer) {
        const clock = document.createElement('div');
        clock.id = 'clock';
        footer.appendChild(clock);
        startTime();
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});