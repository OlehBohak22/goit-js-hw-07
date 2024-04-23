function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const container = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  if (input.value > 100) {
    alert("Value must be less than or equal to 100");
    input.value = "";
  }

  let currentSize = 30;
  for (let i = 0; i < input.value; i++) {
    const div = document.createElement("div");

    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${currentSize}px`;
    div.style.height = `${currentSize}px`;

    container.append(div);

    currentSize += 10;
  }
});

destroyBtn.addEventListener("click", () => {
  input.value = "";
  container.innerHTML = "";
});

input.style.backgroundColor = "transparent";
input.style.width = "120px";
input.style.height = "40px";
input.style.borderRadius = "8px";
input.style.border = "1px solid #808080";
input.style.marginRight = "16px";
input.style.display = "inline-flex";
input.style.justifyContent = "center";

createBtn.style.backgroundColor = "rgba(78, 117, 255, 1)";
createBtn.style.color = "#ffff";
createBtn.style.width = "120px";
createBtn.style.height = "40px";
createBtn.style.height = "40px";
createBtn.style.borderRadius = "8px";
createBtn.style.border = "none";
createBtn.style.marginRight = "16px";

destroyBtn.style.backgroundColor = "#ff4e4e";
destroyBtn.style.color = "#ffff";
destroyBtn.style.width = "120px";
destroyBtn.style.height = "40px";
destroyBtn.style.height = "40px";
destroyBtn.style.borderRadius = "8px";
destroyBtn.style.border = "none";
destroyBtn.style.marginRight = "16px";

container.style.display = "flex";
container.style.gap = "44px";
container.style.marginTop = "44px";
container.style.marginTop = "44px";
container.style.flexWrap = "wrap";
