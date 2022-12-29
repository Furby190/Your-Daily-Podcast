import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

new Splide( '.splide' ).mount();

export function splideCarousel() {
    document.addEventListener( 'DOMContentLoaded', function () {
        const blocks = document.querySelectorAll('#thumbnail-carousel');
        blocks.forEach(block=>{
            new Splide(block, {
                fixedWidth  : 375,
                fixedHeight : 375,
                gap         : 10,
                rewind      : true,
                pagination  : false,
                isNavigation: true,
                breakpoints : {
                  375: {
                    fixedWidth : 144,
                    fixedHeight: 144,
                  },
                  576: {
                    fixedWidth : 144,
                    fixedHeight: 144,
                  },
                },
     
              }).mount();
        })
    })
}