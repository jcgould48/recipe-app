const printRecipe = function(recipe) {
    const li = document.createElement('li');
    const img = document.createElement('img')
    li.innerText = `${recipe.text}`;
    img.src = `${recipe.src}`;
    const ul = document.querySelector('.recipe-list');
  
    ul.appendChild(li);
    ul.appendChild(img)
    li.classList.add('recipe-item');
    img.classList.add('image-item')
    // li.id = recipe.id.toString();
    
  }