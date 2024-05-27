const openBtn = document.getElementById("openCookie");
const closeBtn = document.getElementById("closeCookie");
const cookie = document.getElementById("cookie");

openBtn.addEventListener("click", () => {
    cookie.classList.add("open");
})

closeBtn.addEventListener("click", () => {
    cookie.classList.remove("open");
})