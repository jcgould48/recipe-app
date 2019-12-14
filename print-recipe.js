const printRecipe = function(recipe) {
    const img = document.createElement('li');
    li.innerText = `${todo.text}`;

    const ul = document.querySelector('.recipe-list');
  
    ul.appendChild(li);
  
    if (todo.complete) {
      li.classList.add('complete')
    }

    li.classList.add('recipe-item');
    li.id = recipe.id.toString();
    
  }