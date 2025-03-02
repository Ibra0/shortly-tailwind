const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errMsg = document.getElementById("err-msg");

linkForm.addEventListener("submit", formSubmit);
btn.addEventListener("click", navToggle);

//Toggle Mobile Menu
function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

function formSubmit(e) {
  e.preventDefault();
  if (input.value === "") {
    errMsg.innerHTML = "please enter a value";
    input.classList.add("border-red-500");
  } else {
    errMsg.innerHTML = "";
    input.classList.remove("border-red-500");
    alert("Success");
  }
}
