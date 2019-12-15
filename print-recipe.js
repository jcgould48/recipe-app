const printRecipe = function(recipe) {
    const li = document.createElement('li');
    const img = document.createElement('img')
    const checkBox = document.createElement('input')

    li.innerText = `${recipe.text}`;
    img.src = `${recipe.src}`;
    checkBox.type = 'checkbox'

    const ol = document.querySelector('.recipe-list');
    
    ol.appendChild(li);
    ol.appendChild(checkBox);
    ol.appendChild(img);
    
    li.classList.add(`recipe-item${recipe.id}`);
    img.classList.add(`image-item${recipe.id}`)
    checkBox.classList.add('checked-recipe')
    
    li.id = recipe.id.toString();
    img.id = recipe.id.toString();
    checkBox.id = recipe.id.toString();
    
  }

  const printCurrent = function(recipes) {
    for (const recipe of recipes) {
      printRecipe(recipe);
    }
  }
  
  printCurrent(recipes);