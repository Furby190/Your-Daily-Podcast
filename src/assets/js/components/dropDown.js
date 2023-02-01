const moreBtn = document.querySelector('.more-btn'); 
const dropdownMore = document.querySelector('.dropdown-content');
const dropdownMoreBtns = document.querySelectorAll('.dropdown-content-btn');
const navArrowImage = document.querySelector('.nav-arrow-image');




const navArrowRotate = () => {
    navArrowImage.classList.toggle('arrow-rotate');
}

const downUpMoreMenu = () => {
    dropdownMore.classList.toggle('active');
    navArrowRotate();
}

const closeMoreMenu = () => {
    if (dropdownMore.classList.contains('active')) {
        dropdownMore.classList.remove('active');
        navArrowRotate();
    }
}





dropdownMoreBtns.forEach(dropDownMoreBtn => {
    dropDownMoreBtn.addEventListener('click', closeMoreMenu)
});
moreBtn.addEventListener('click', downUpMoreMenu);

