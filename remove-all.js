const removeAllRecipe = function() {
    const list = document.querySelector('.recipe-list');
    while(list.hasChildNodes()) {
      list.firstChild.remove();
    }
  }


document.querySelector('.remove-all').addEventListener('click', () => {
    
    removeAllRecipe()
})