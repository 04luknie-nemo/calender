function main() {

    setInterval(clock, 1000);
    weekday();
    month();

    function clock() {
        const nu = new Date();
        const timeString = nu.toLocaleTimeString("sv", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        });

        const element = document.getElementById("time");

        if (element) {
            element.textContent = timeString;
        }

    }
    function weekday() {
        const nu = new Date();
        const weekday = nu.toLocaleDateString("sv", {
            weekday: "long"

        });
        document.getElementById("weekday").textContent = weekday;
    }
    function month() {
        const nu = new Date();
        const datum = nu.toLocaleDateString("sv", {

            month: "long",
            day: "numeric",
            year: "numeric",
        });
        document.getElementById("datum").textContent = datum;
    }
}
window.addEventListener("DOMContentLoaded", main);