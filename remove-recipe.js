function removeRecipe(){
    const checkedRecipe = document.querySelectorAll('.checked-recipe');
    
    for (i=0; i<checkedRecipe.length; i++)
    {
      if (checkedRecipe[i].checked){
        let checkedId = checkedRecipe[i].id
        const checkedDiv = document.querySelector(`.div-item${checkedId}`);
            
        let rmvElm = checkedRecipe[i]; 

        rmvElm.parentNode.removeChild(rmvElm);
        checkedDiv.parentNode.removeChild(checkedDiv);
        
        recipes.splice(checkedId,1);
        }
    }
  }
        


document.querySelector('.remove-recipe').addEventListener('click', () => {
    
    removeRecipe()

//  refreshRecipes()
})


