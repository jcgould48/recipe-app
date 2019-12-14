const printRecipe = function(recipe) {
    const li = document.createElement('li');
    const img = document.createElement('img')
    li.innerText = `${recipe.text}`;
    img.src = `${recipe.src}`;
    const ol = document.querySelector('.recipe-list');
  
    ol.appendChild(li);
    ol.appendChild(img)
    li.classList.add('recipe-item');
    img.classList.add('image-item')
    // li.id = recipe.id.toString();
    
  }

  const printCurrent = function(recipes) {
    for (const recipe of recipes) {
      printRecipe(recipe);
    }
  }
  
  printCurrent(recipes);