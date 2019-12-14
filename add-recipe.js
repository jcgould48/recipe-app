const addRecipe = (text, src) => {
    let thisRecipe = {
      text: text,
      src: src,
    }
    currentRecipes.push(thisRecipe);
  
    return thisRecipe;
  }


const nameInput = document.querySelector('.recipe-input');
const srcInput = document.querySelector('.image-input')

document.querySelector('.add-recipe').addEventListener('click',function(){
    printRecipe(addRecipe(nameInput.value, srcInput.value));
    nameInput.value = '';
  })


  