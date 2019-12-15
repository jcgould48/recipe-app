const addRecipe = (text, src, link) => {
    let thisRecipe = {
      text: text,
      src: src,
      link:link,
      id: recipes.length,
    }
    currentRecipes.push(thisRecipe);
  
    return thisRecipe;
  }


const nameInput = document.querySelector('.recipe-input');
const srcInput = document.querySelector('.image-input')
const linkInput = document.querySelector('.link-input')

document.querySelector('.add-recipe').addEventListener('click',function(){
    printRecipe(addRecipe(nameInput.value, srcInput.value, linkInput.value));
    nameInput.value = '';
    srcInput.value = '';
    linkInput.value = '';

  })


  