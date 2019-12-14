const addRecipe = (text) => {
    let thisRecipe = {
      text: text,
    }
    currentRecipes.push(thisRecipe);
  
    return thisRecipe;
  }


const input = document.querySelector('.recipe-input');

document.querySelector('.add-recipe').addEventListener('click',function(){
    printRecipe(addRecipe(input.value));
    input.value = '';
  })


  