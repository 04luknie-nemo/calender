import "./aside-top.js";
import { initCalendar } from "./calendar.js";
import { initClock } from "./aside-top.js";

window.addEventListener("DOMContentLoaded", () => {
  initClock();
  initCalendar();
  addTodo();
  getWeather();
});
