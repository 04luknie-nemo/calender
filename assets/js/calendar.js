import { todoList } from "./form.js";
import { holidays } from "./holiday.js";

export function initCalendar() {
  lucide.createIcons();

  const calenderItemSection = document.querySelector(".calender-item--section");
  const calenderMonthSection = document.querySelector(
    ".calender-month--section",
  );

  const leftChevron = document.querySelector(".left-arrow");
  const rightChevron = document.querySelector(".right-arrow");

  let date = new Date();

  function renderCalender() {
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();
    console.log(currentYear);
    calenderItemSection.innerHTML = "";

    const monthName = new Date(currentYear, currentMonth).toLocaleString("sv-SE", {
      month: "long",
    });

    const monthTitle = document.querySelector(".month-title");
    monthTitle.classList.add("calender-month--headline");

    monthTitle.textContent = monthName;

    const inc = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let i = 0; i < inc; i++) {
      let calenderItem = document.createElement("article");
      calenderItem.classList.add("calender--item");

      calenderItem.textContent = [i + 1];
      calenderItem.style.textAlign = "center";

      const holiday = holidays.find(
        (h) => h.month === currentMonth + 1 && h.day === i + 1,
      );

      if (holiday) {
        const holidayText = document.createElement("h3");
        holidayText.classList.add("holiday-text");
        holidayText.textContent = holiday.name;
        holidayText.style.borderRadius = "5rem";
        holidayText.style.border = "0.14rem solid #7987a0";

        if (holiday.month >= 3 && holiday.month < 6) {
          holidayText.style.backgroundImage = "linear-gradient(to top, #b8e994 0%, #e9f7d0 100%)";
          calenderItem.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.72)), linear-gradient(to top, #b8e994 0%, #e9f7d0 100%)";
        }
        if (holiday.month >= 6 && holiday.month < 9) {
          holidayText.style.backgroundImage = "linear-gradient(to top, #ffe66d 0%, #fff3b0 100%)";
          calenderItem.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.72)), linear-gradient(to top, #ffe66d 0%, #fff3b0 100%)";
        }
        if (holiday.month >= 9 && holiday.month < 12) {
          holidayText.style.backgroundImage = "linear-gradient(to top, #d68c45 0%, #f6d365 100%)";
          calenderItem.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.72)), linear-gradient(to top, #d68c45 0%, #f6d365 100%)";
        }
        if (holiday.month === 12 || holiday.month < 3) {
          holidayText.style.backgroundImage = "linear-gradient(to top, #a9d6e5 0%, #dff6ff 100%)";
          calenderItem.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.72)), linear-gradient(to top, #a9d6e5 0%, #dff6ff 100%)";
        }

        calenderItem.appendChild(holidayText);
        calenderItem.classList.add("calender--holiday");
      }
      console.log(todoList)
      // LÄGG TILL DETTA:
      const todosThisDay = todoList.filter(
        (todo) =>
          todo.date.getFullYear() === currentYear &&
          todo.date.getMonth() === currentMonth &&
          todo.date.getDate() === i + 1,
      );

      todosThisDay.forEach((todo) => {
        const todoText = document.createElement("p");
        todoText.classList.add("todo-text");
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

  leftChevron.addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1)
    renderCalender();
  });

  rightChevron.addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1)
    renderCalender();
  });

  window.addEventListener("todos-updated", renderCalender);
  renderCalender();
}
