const printRecipe = function(recipe) {
    const li = document.createElement('li');
    const img = document.createElement('img')
    const check = document.createElement('input')

    li.innerText = `${recipe.text}`;
    img.src = `${recipe.src}`;
    checkBox.type = 'checkbox'

    const ol = document.querySelector('.recipe-list');
    
    ol.appendChild(li);
    ol.appendChild(checkBox);
    ol.appendChild(img);
    
    li.classList.add('recipe-item');
    img.classList.add('image-item')
    checkBox.classList.add('checked-recipe')
    // li.id = recipe.id.toString();
    
  }

  const printCurrent = function(recipes) {
    for (const recipe of recipes) {
      printRecipe(recipe);
    }
  }
  
  printCurrent(recipes);