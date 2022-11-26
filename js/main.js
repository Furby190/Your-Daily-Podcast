const moreBtn = document.querySelector('.more-btn'); 
const dropdownMore = document.querySelector('.dropdown-content')


const downUpMoreMenu = () => {

    if(dropdownMore.style.display === 'none') {
        dropdownMore.style.display = 'block';
    } else {
        dropdownMore.style.display = 'none';
    }
}





moreBtn.addEventListener('click', downUpMoreMenu);


