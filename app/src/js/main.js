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
    //let li = document.querySelectorAll('aside.menu .lst li');

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
    /*
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
    */
})();

// GET SECTION AND ACTIVE MENU ITEM
(() => {
    let navLi = '';
    const sections = document.querySelectorAll("section");
    
    if (window.innerWidth <= 640) {
        navLi = document.querySelectorAll("aside.menu .lst li");
    } else {
        navLi = document.querySelectorAll(".navbar-menu .navigation li");
    }


    window.onscroll = () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id"); 
        }
    });

    navLi.forEach((li, i, arr) => {

        li.classList.remove("active");

        if (li.classList.contains(current)) {
        li.classList.add("active");
        
        arr.forEach((el, j) => {
            if (j > i) {
                el.classList.remove("active");
            } else {
                el.classList.add("active");
            }
        })
        } 
    });
    };
})();

// TOGGLE NAVBAR IN SCROLL
(() => {
    var lastScrollTop;

    navbar = document.querySelector('.navbar-menu');

    window.addEventListener('scroll',function(){
    
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if(scrollTop > lastScrollTop || scrollTop == 0) {
        navbar.style.marginTop='-80px';
    } else {
        navbar.style.marginTop = '0';
    }
    
    lastScrollTop = scrollTop;
    });
})();
 


// FULLPAGE.js INIT
/*
(() => {
    if (window.innerWidth <= 640) {
        new fullpage('#fullpage', {
            licenseKey: '',
            autoScrolling:true,
            scrollHorizontally: true,
            credits: { enabled: false, label: '', position: 'left' },
            scrollOverflow: true, 
            scrollBar:false,
            paddingTop: '72px',
            paddingBottom: '0'
        });
    } else {
        new fullpage('#fullpage', {
            licenseKey: '',
            autoScrolling:true,
            scrollHorizontally: true,
            credits: { enabled: false, label: '', position: 'left' },
            scrollOverflow: true, 
            scrollBar:false,
            
            paddingTop: '0',
            paddingBottom: '0'
        });
    }
})();

// WATCH CHANGES
(() => {
    const body = document.querySelector('body');
    const navbar = document.querySelector('nav.navbar');

    let observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (body.classList.contains('fp-viewing-1')) {
                navbar.classList.add('disabled');
            } else {
                navbar.classList.remove('disabled');
            }
        });
    });
     
    observer.observe(body, {
        attributes: true
    });
})();


*/