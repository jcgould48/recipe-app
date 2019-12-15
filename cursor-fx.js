const allImages = document.querySelectorAll('.food')
document.querySelector('.add-recipe').addEventListener('mouseover', imgFunc)
document.querySelector('.remove-recipe').addEventListener('mouseover', imgFunc)
document.querySelector('.remove-all').addEventListener('mouseover', imgFunc)
// document.querySelector('.image-item0').addEventListener('mouseover', imgFunc)

for (let i = 0; i < allImages.length; i++) {
    allImages[i].addEventListener('mouseover', imgFunc);
    allImages[i].addEventListener('mouseover', imgOp);
    allImages[i].addEventListener('mouseout', imgNorm);
}

function imgFunc(element){
    element.target.style.cursor= 'pointer'
}
function imgOp(element){
    element.target.style.opacity = '.5'
}
function imgNorm(element){
    element.target.style.opacity = '1'
}

