function removeRecipe(){
    const checkedRecipe = document.querySelectorAll('.checked-recipe');
    
    for (i=0; i<checkedRecipe.length; i++)
    {
            if (checkedRecipe[i].checked)
            {
            let checkedId = checkedRecipe[i].id
            // const checkedImage = document.querySelector(`.image-item${checkedId}`);
            // checkedImage.remove()
            // checkedRecipe[i].classList.add('pooped')

            } }}
        
//             let rmvElm = checkedRecipe[i]; 
//         let li =document.getElementsByClassName(".image-item");         
//         checkedRecipe[i].nextSibling.nodeValue = ''; // Text value set to 
//         rmvElm.parentNode.removeChild(rmvElm);
//         ol = document.getElementsByTagName('ol')[0];
//         li = ol.getElementsByTagName('li');
//         ol.removeChild(li[i]);
//             } else {       
//             }
//     }
// }



document.querySelector('.remove-recipe').addEventListener('click', () => {
    
    removeRecipe()

//  refreshRecipes()
})


