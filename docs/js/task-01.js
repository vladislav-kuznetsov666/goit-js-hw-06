const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.children;

console.log("Number of categories:", categoryItems.length);

for (let i = 0; i < categoryItems.length; i++) {
  const categoryItem = categoryItems[i];
  const categoryTitle = categoryItem.querySelector("h2").textContent;
  const categoryElements = categoryItem.querySelectorAll("li").length;

  console.log("Category:", categoryTitle);
  console.log("Elements:", categoryElements);
};



