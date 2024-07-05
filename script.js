document.title = "Project";

const change = document.querySelector(".name");
const addFriend = document.querySelector("#btn2");
const removeFriend = document.querySelector("#btn1");

addFriend.addEventListener('click', () => {
    change.textContent = 'Friends';
    change.style.color = 'green';
});

removeFriend.addEventListener('click', () => {
    change.textContent = 'Stranger';
    change.style.color = 'red';
});
