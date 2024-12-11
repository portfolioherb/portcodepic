const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li');
const menuOptions = {
    duration: 1400,
    easing: 'ease',
    fill: 'forwards',
};
//menu open
menuOpen.addEventListener('click', () => {
    menuPanel.animate({translate: ['100vw 0', '0 0']}, menuOptions);

    menuItems.forEach((menuItem, index) => {
        menuItem.animate(
            {
                opacity: [0, 1],
                translate: ['2rem', 0],
            },
            {
                duration: 2000,
                delay: 300 * index,
                easing: 'ease',
                fill: 'forwards',
            },
        );
    });
});
//menu close
menuClose.addEventListener('click',() => {
    menuPanel.animate({translate:['0 0','100vw 0']},
menuOptions);
    menuItems.forEach((menuItem) => {
        menuItem.animate({opacity:[1,0]}, menuOptions);
    });
});
/*==========================================================================================================*/ 
/*
画像ギャラリー
================================================ */
const bossimage = document.querySelector('.bossimage');
const thumbImages = document.querySelectorAll('.subimage');
thumbImages.forEach((toridasi)=>{
  toridasi.addEventListener('mouseover', (notta) => {
      bossimage.src = notta.target.src;
      bossimage.animate({opacity: [0, 1]}, 500);

  });
});
  
/*====================================================================================================
*/
let imgindex = 0;
const mainimage = document.querySelector('#mainimage');
const kougoimage= [
                    'images/mainpage.jpeg',
                    'images/spoon.jpeg'
                ];
   
const mainchange =()=>{
    mainimage.style.backgroundImage = `url(${kougoimage[imgindex]})`;
    imgindex++;
    if (imgindex===kougoimage.length){
        imgindex = 0;
    }
}
setInterval(mainchange,6000);


/*
ローディングから画面遷移*/

const afterloading = document.querySelector('.afterloading');
const p = document.querySelector('.colorful p')
const colorful = document.querySelector('.colorful');
window.addEventListener('load', () => {

    colorful.animate(
        {
            translate:['0 0','0 -100vh'],
            opacity: [1,0]
        },
        {
            duration: 1000,
            delay: 3000,
            easing: 'ease',
            fill: 'forwards'
        }
    );
    p.animate({opacity:[1,0]},{duration:1000,delay:2000,fill: 'forwards'})
});


