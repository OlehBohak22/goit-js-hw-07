const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  let value = input.value.trim();

  if (value === "") {
    output.textContent = "Anonymus";
  } else {
    output.textContent = value;
  }
});
