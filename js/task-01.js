const categories = document.querySelectorAll(".item");
const countItems = categories.length;
console.log(`Number of categories: ${countItems}`);
categories.forEach(category => {
const categoryTitle = category.querySelector('h2').textContent;
const countEl = category.querySelectorAll("li").length;
console.log(`Category: ${categoryTitle}`);
console.log(`Elements: ${countEl}`);
})