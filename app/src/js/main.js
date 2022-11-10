

window.addEventListener('resize', function () { 
    "use strict";

    if (window.innerWidth <= 640) window.location.reload();
    
});

// NAVBAR MENU
(() => {
    let bt_open = document.querySelector('nav.navbar .bt-open');
    let menu = document.querySelector('aside.menu');
    let bt_close = document.querySelector('aside.menu .bt-close');
    let anchors = document.querySelectorAll('aside.menu a');
    let li = document.querySelectorAll('aside.menu .lst li');

    bt_open.addEventListener('click', () => {
        menu.classList.add('active');
    });

    bt_close.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    anchors.forEach((a) => {
        a.addEventListener('click', () => {
            setTimeout(() => {
                menu.classList.remove('active');
            }, 500);
            
        });
    });

    li.forEach((el, i, arr) => {
        el.addEventListener('click', () => {
            arr.forEach((arr_el, arr_i) => {
                if (arr_i > i) {
                    arr_el.classList.remove('active');
                } else {
                    arr_el.classList.add('active');
                }
            })
        });
    });
})();

// FULLPAGE.js INIT
new fullpage('#fullpage', {
    licenseKey: '',
    credits: { enabled: false, label: '', position: 'left' },
    scrollOverflow: true, 
    scrollOverflowMacStyle: true,
    scrollBar:false,
    anchors:['sec-foreword'],
    paddingTop: '0',
    paddingBottom: '0'
});