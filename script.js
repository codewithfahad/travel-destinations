const btnClose = document.querySelector(".form__close");
const bookBtn = document.querySelector(".book__btn");
const form = document.querySelector(".form");
const overlay = document.querySelector(".overlay");

function closeModal() {
  form.classList.add("hidden");
  overlay.classList.add("hidden");
}

function showModal() {
  form.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

bookBtn.addEventListener("click", showModal);

btnClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
