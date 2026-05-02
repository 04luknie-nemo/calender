import "./aside-top.js";
import { initCalendar } from "./calendar.js";
import { initClock } from "./aside-top.js";
import { countTodos } from './count-todos.js';

window.addEventListener("DOMContentLoaded", () => {
  initClock();
  initCalendar();
  getWeather();
  countTodos();
});
