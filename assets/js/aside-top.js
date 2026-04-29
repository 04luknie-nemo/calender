window.addEventListener("DOMContentLoaded", main);
function main() {
    const nu = new Date();
    setInterval((nu = new Date()) => {
        clock(nu);
    }, 1000);

    weekday(nu);
    month(nu);

    function clock(nu) {
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
    function weekday(nu) {
        const weekday = nu.toLocaleDateString("sv", {
            weekday: "long"
        });
        document.getElementById("weekday").textContent = weekday;
    }
    function month(nu) {
        const datum = nu.toLocaleDateString("sv", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
        document.getElementById("datum").textContent = datum;
    }
}