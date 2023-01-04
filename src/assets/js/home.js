import '../scss/main.scss';

import './components/dropDown'; 
import './components/swiper';


import { splideCarousel } from './components/splideCarousel';
splideCarousel();


const footerYear = document.querySelector ('.footnote-year');
const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleCurrentYear();




