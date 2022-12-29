const moreBtn = document.querySelector('.more-btn'); 
const dropdownMore = document.querySelector('.dropdown-content');
const navArrowImage = document.querySelector('.nav-arrow-image');




const navArrowRotate = () => {
    navArrowImage.classList.toggle('arrow-rotate')
}

const downUpMoreMenu = () => {
    dropdownMore.classList.toggle('active');
    navArrowRotate();
}




moreBtn.addEventListener('click', downUpMoreMenu);

