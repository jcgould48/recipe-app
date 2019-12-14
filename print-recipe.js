const printRecipe = function(recipe) {
    const li = document.createElement('li');
    li.innerText = `${recipe.text}`;

    const ul = document.querySelector('.recipe-list');
  
    ul.appendChild(li);

    li.classList.add('recipe-item');
    li.id = recipe.id.toString();
    
  }