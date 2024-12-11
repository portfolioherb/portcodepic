/*
ローディングから画面遷移
====================================*/
const caramel = document.querySelector('#loading');
const upGreen = document.querySelector('#upgreen');
window.addEventListener('load', () => {
//  ローディングが終わった時の処理
    caramel.animate(
        {
            opacity: [1, 0],
            visibility: 'hidden',
        },
        {
            duration: 2000,
            delay: 1200,
            easing: 'ease',
            fill: 'forwards'
        }
    ); 

    //グリーン画面が上にシュッ
    upGreen.animate(
        {
            translate:['0 100vh','0 0','0 -100vh']
        },
        {
            duration: 2000,
            delay: 1000,
            easing: 'ease',
            fill: 'forwards'
        }
    );
});
/*タイトルをふわっと
===================================*/
const titleFuwa = document.querySelectorAll('.jsanime1');
const gazo = document.querySelector('.haha');

const okurete = () => {
    for (let i = 0; i < 2; i++) {

    const keyframes = {
        opacity: [0, 1],
        translate: ['10% 0', 0],
    };
    const options = {
        duration: 4000,
        delay: i*500,
        fill: 'forwards',
        easing: 'ease',
    };
    titleFuwa[i].animate(keyframes, options)
    gazo.animate(keyframes,options)
    };
}
setTimeout(okurete, 800);

/*fuwatto================================
============================================*/
const ugokia = {
    opacity: [0.1,1],
    translate: ['0 5%', 0],
};
const ugokib = {
    duration: 2000,
    easing: 'ease',
    fill:'forwards',
};

window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const windowheight = window.innerHeight;
    const boxes = document.querySelectorAll('.fadein');

    boxes.forEach((box) => {
        
    const distanstobox = box.offsetTop;
    if(scroll + windowheight > distanstobox){
        box.animate(ugokia,ugokib);
        }
    });
},{
    once:true
});


const jyunban = document.querySelectorAll('.jyunban');
const workimg = document.querySelectorAll('.workimg');


const watcher = (please,minuet) => {
for (let i = 0; i < please.length; i++){
    const observer = new IntersectionObserver((entries,observer) =>{
        for(let j = 0; j < entries.length; j++){
        if(entries[j].isIntersecting) {
            entries[j].target.animate(ugokia,
                {
                    duration: 1500,
                    easing: 'ease',
                    fill:'forwards',
                });
            observer.unobserve(entries[j].target);
        }
    };
});
observer.observe(please[i]);
};
};
watcher(jyunban, 400);
watcher(workimg, 800);


/*=============================================
puyopuyo*/


const puyopuyo = document.querySelector('#aboutme ul li:last-child');

const ugokif = {
    borderRadius: [
        '20% 50% 50% 70%/50% 50% 70% 50%',
        '50% 20% 50% 50%/40% 40% 60% 60%',
        '50% 40% 20% 40%/40% 50% 50% 80%',
        '50% 50% 50% 20%/40% 40% 60% 60%',
    ],
};
const ugokii = {
    duration: 8000,
    direction: 'alternate',
    iterations: Infinity,
};
puyopuyo.animate(ugokif,ugokii);

/*スライドショー==========================================
========================================================= */

//最初に定義します
const slide = document.querySelector('.slide');
const mae = document.querySelector('.mae');
const next = document.querySelector('.next');
const lists = document.querySelectorAll('.list');
const totalslides = lists.length;
let count = 0;
const kuromaru = document.querySelector('.kuromaru');

//関数作ります
const marudouki = () => {
    for (let i = 0; i < lists.length; i++){
        lists[i].style.backgroundColor = i === count % totalslides ? '#000':'#fff';
    }
};

const nextclick = () => {
    slide.classList.remove(`slide${count % totalslides + 1}`);
    count++;
    slide.classList.add(`slide${count % totalslides + 1}`);
    marudouki();
};

const maeclick = () => {
    slide.classList.remove(`slide${count % totalslides + 1}`);
    count--;
    if (count < 0){count = totalslides - 1}
    slide.classList.add(`slide${count % totalslides + 1}`);
    marudouki();
};

//サイドのボタンの設定
next.addEventListener('click',() =>{
    nextclick();
});
mae.addEventListener('click',() =>{
    maeclick();
});

//くろまるの設定
kuromaru.addEventListener('click',(event) => {
    if (event.target.classList.contains('list')){
        const index = Array.from(lists).indexOf(event.target);
        slide.classList.remove(`slide${count % totalslides + 1}`);
        count = index;
        slide.classList.add(`slide${count % totalslides + 1}`);
        marudouki();
    }
});
