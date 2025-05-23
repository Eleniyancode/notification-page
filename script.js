const markAllEl = document.getElementById("mark-all");
console.log(markAllEl);
const notificationsEls = [...document.querySelectorAll(".notification")];
console.log(notificationsEls);
let newCount = [...document.querySelectorAll(".notification.new")].length;
const countDisplay = document.getElementById("new-notification-count");
countDisplay.textContent = newCount;

console.log(countDisplay.textContent);
const dotEl = [...document.querySelectorAll(".dot")];
console.log(dotEl);

markAllEl.addEventListener("click", () => {
  notificationsEls.forEach((n) => {
    n.style.backgroundColor = "white";
  });

  dotEl.forEach((d) => {
    d.style.display = "none";
  });

  newCount = 0
  countDisplay.textContent = 0;
});

notificationsEls.forEach((n, i) => {
  n.addEventListener("click", () => {
    if (countDisplay.textContent > 0)
    if (n.classList.contains("new")) {
      n.classList.remove("new");
      newCount--;
      countDisplay.textContent = newCount;

      dotEl.forEach((d, j) => {
        if (i === j) d.style.display = "none";
      });
    }
  });
});
