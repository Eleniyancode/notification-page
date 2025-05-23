const markAllEl = document.getElementById('mark-all');
console.log(markAllEl);
const newNotificationsEls = [...document.querySelectorAll('.new-notification')];
console.log(newNotificationsEls);
const newNotificationCount = document.getElementById('new-notification-count');


const dotEl = [...document.querySelectorAll('.dot')];
console.log(dotEl);

markAllEl.addEventListener('click', () => {
    newNotificationsEls.forEach(n => {
        n.style.backgroundColor = 'white';
    });
   
        dotEl.forEach(d => {
            d.style.display = 'none';
        });
   
        newNotificationCount.textContent = 0;
});
