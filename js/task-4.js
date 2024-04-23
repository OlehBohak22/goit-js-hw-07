const form = document.querySelector(".login-form");
const user = {};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (form.elements.email.value === "" || form.elements.password.value === "") {
    return alert("All form fields must be filled in");
  }

  user.email = form.elements.email.value.trim();
  user.password = form.elements.password.value.trim();
  console.log(user);
});
