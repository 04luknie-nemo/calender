export function initClock() {
  const nu = new Date();
  setInterval((nu = new Date()) => {
    clock(nu);
  }, 1000);

  function clock(nu) {
    const timeString = nu.toLocaleTimeString("sv", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

    weekday(nu);
    month(nu);

    const element = document.getElementById("time");

    if (element) {
      element.textContent = timeString;
    }

    function weekday(nu) {
      const weekday = nu.toLocaleDateString("sv", {
        weekday: "long",
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
}
