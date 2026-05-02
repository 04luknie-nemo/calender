export async function getWeather() {
    const weatherdata = await fetch("https://api.open-meteo.com/v1/forecast?latitude=57.72&longitude=12.94&current=temperature_2m");
    const data = await weatherdata.json();
    const temp = data.current.temperature_2m;
    console.log(temp);
    let pagetemp = document.getElementById("temp")
    pagetemp.textContent = `Temperatur: ${temp} °C`;
}
