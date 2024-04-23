const categories = document.querySelector("#categories");
const items = document.querySelectorAll(".item");

console.log(`Number of categoties: ${items.length}`);

items.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryItem = item.querySelectorAll("li");

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItem.length}`);
});
