import Splide from '@splidejs/splide';
// import Splide from '@splidejs/splide/src/css/themes/default';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';


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
                  600: {
                    fixedWidth : 60,
                    fixedHeight: 44,
                  },
                },
     
              }).mount();
        })
    })
}