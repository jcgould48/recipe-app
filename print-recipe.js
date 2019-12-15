const printRecipe = function(recipe) {
    const div = document.createElement('div')
    const newA = document.createElement('a')
    const li = document.createElement('li');
    const img = document.createElement('img')
    const checkBox = document.createElement('input')

    li.innerText = `${recipe.text}`;
    img.src = `${recipe.src}`;
    newA.href = `${recipe.link}`;
    newA.target= '_blank'
    checkBox.type = 'checkbox'

    const ol = document.querySelector('.recipe-list');
  
    ol.appendChild(div);
    div.appendChild(li);
    div.appendChild(newA);
    newA.appendChild(img);
    div.appendChild(checkBox);
    
    div.classList.add(`div-item${recipe.id}`);
    li.classList.add(`recipe-item${recipe.id}`);
    img.classList.add(`image-item${recipe.id}`, 'food')
    checkBox.classList.add('checked-recipe', 'custom-check')
    
    
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