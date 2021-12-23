ScrollReveal().reveal('#titleBanner', { duration : 1500, opacity: 0});
ScrollReveal().reveal('#subBanner', { duration : 1500, opacity: 0, delay: 100 });
ScrollReveal().reveal('#btnBanner', { duration : 1500, opacity: 0, delay: 200 });
ScrollReveal().reveal('#imgBanner', { duration : 1500, opacity: 0, delay: 100 });

ScrollReveal().reveal('#listProgram', { duration : 1500, opacity: 0, delay: 300});

ScrollReveal().reveal('#titleAbout', { duration : 1500, opacity: 0, origin: 'top', distance: '50px'});
ScrollReveal().reveal('#subAbout', { duration : 1500, opacity: 0, delay: 100});

ScrollReveal().reveal('.imgCarousel', { duration : 1500, opacity: 0, delay: 150, origin: 'left', distance: '100px'});
ScrollReveal().reveal('.txtCarousel', { duration : 1500, opacity: 0, delay: 200, origin: 'right', distance: '100px'});

ScrollReveal().reveal('#program', { duration : 1500, opacity: 0});
ScrollReveal().reveal('#daftar', { duration : 1500, opacity: 0, delay: 100});

(function ( $ ) {
    $.fn.replaceClass = function(c1, c2) {
        return this.removeClass(c1).addClass(c2);
    };
}( jQuery ));

if ($(window).width() <= 884) {
    $('#listProgram').replaceClass('position-absolute', 'container')
    $('.imgProgram').width('100px')
    $('.imgProgram').height('100px')
}

if ($(window).width() <= 428) {
    $('#program1').append(
        `<img src='assets/img/1.png' class='me-5 imgProgram' width='150px' height='150px'>
        <img src='assets/img/2.png' class='imgProgram' width='150px' height='150px'>`)
    $('#program2').append(
        `<img src='assets/img/3.png' class='me-5 imgProgram' width='150px' height='150px'>
        <img src='assets/img/4.png' class='imgProgram' width='150px' height='150px'>`)

    $('.imgProgram').width('100px')
    $('.imgProgram').height('100px')
} else {
    $('#program1').append(
        `<img src='assets/img/1.png' class='me-5 imgProgram' width='150px' height='150px'>
        <img src='assets/img/2.png' class='me-5 imgProgram' width='150px' height='150px'>
        <img src='assets/img/3.png' class='me-5 imgProgram' width='150px' height='150px'>
        <img src='assets/img/4.png' class='imgProgram' width='150px' height='150px'>`)
}