import { holidays } from "./holiday.js";
import { todoList } from "./form.js";

let currentMonth = new Date().getMonth();
let calenderItemSection;
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export function initCalendar() {
  lucide.createIcons();

  calenderItemSection = document.querySelector(".calender-item--section");
  const calenderMonthSection = document.querySelector(
    ".calender-month--section",
  );

  const leftChevron = document.querySelector(".left-arrow");
  const rightChevron = document.querySelector(".right-arrow");

  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  leftChevron.addEventListener("click", () => {
    currentMonth = (currentMonth - 1 + 12) % 12;
    renderCalender();
  });

  rightChevron.addEventListener("click", () => {
    currentMonth = (currentMonth + 1) % 12;
    renderCalender();
  });

  renderCalender();
}
export function renderCalender() {
  calenderItemSection.innerHTML = "";

  const monthName = new Date(2026, currentMonth).toLocaleString("sv-SE", {
    month: "long",
  });

  const monthTitle = document.querySelector(".month-title");
  monthTitle.classList.add("calender-month--headline");

  monthTitle.textContent = monthName;

  const inc = daysInMonth[currentMonth];

  for (let i = 0; i < inc; i++) {
    let calenderItem = document.createElement("article");
    calenderItem.classList.add("calender--item");

    calenderItem.textContent = [i + 1];

    const holiday = holidays.find(
      (h) => h.month === currentMonth + 1 && h.day === i + 1,
    );

    if (holiday) {
      const holidayText = document.createElement("p");
      holidayText.classList.add("holiday-text");
      holidayText.textContent = holiday.name;
      calenderItem.appendChild(holidayText);
      calenderItem.classList.add("calender--holiday");
    }

    const todosThisDay = todoList.filter(
      (todo) => todo.date.getMonth() === currentMonth &&
        todo.date.getDate() === i + 1
    );

    todosThisDay.forEach(todo => {
      const todoText = document.createElement("p");
      todoText.textContent = todo.description;
      calenderItem.appendChild(todoText);
    });
    calenderItemSection.appendChild(calenderItem);
  }

  const calenderItems = document.querySelectorAll(".calender--item");

  for (let i = 0; i < calenderItems.length; i++) {
    calenderItems[i].addEventListener("click", (e) => {
      e.target.style.background = "white";
    });
  }
}
