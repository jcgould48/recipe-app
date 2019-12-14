function removeRecipe(){
    const checkedRecipe = document.getElementsByClassName('.checked-recipe');
    for (i=0; i<checkedRecipe.length; i++)
    {
            if (checkedRecipe[i].checked)
            {
            let rmvElm = checkedRecipe[i]; 
        let li=document.getElementsByClassName("recipe-item");         
        food[i].nextSibling.nodeValue = ''; // Text value set to 
        rmvElm.parentNode.removeChild(rmvElm);
        ol = document.getElementsByTagName('ol')[0];
        li = ol.getElementsByTagName('li');
        ol.removeChild(li[i]);
            } else {       
            }
    }
}

document.querySelector('.remove-recipe').addEventListener('click', removeRecipe)