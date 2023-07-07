const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngredients = ingredients.map(ingredient => {
  const itemIngredient = document.createElement('li');
  itemIngredient.textContent = ingredient;
  itemIngredient.classList.add('item');
  return itemIngredient;
})
const ulIngredients = document.querySelector('ul');
ulIngredients.append(...listIngredients);