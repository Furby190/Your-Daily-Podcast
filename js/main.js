const moreBtn = document.querySelector('.more-btn'); 
const dropdownMore = document.querySelector('.dropdown-content');
const navArrow = document.querySelector('.nav-arrow-image');


const showMoreSectionControl = () => {
    dropdownMore.classList.toggle('active');
}

const navArrowRotate = () => {
    navArrow.classList.toggle('arrow-rotate');
}


moreBtn.addEventListener('click', showMoreSectionControl);
moreBtn.addEventListener('click', navArrowRotate);

