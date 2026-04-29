const calenderItemSection = document.querySelector(".calender-item--section");

for (let i = 0; i < 31; i++) {
  let calenderItem = document.createElement("article");
  calenderItem.classList.add("calender--item");

  calenderItem.textContent = [i + 1];

  calenderItemSection.appendChild(calenderItem);
}

const calenderItems = document.querySelectorAll(".calender--item");

for (let i = 0; i < calenderItems.length; i++) {
  calenderItems[i].addEventListener("click", (e) => {
    e.target.style.background = "white";
  });
}
