/*------Сролл до нужного места-------*/
$(".link").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
        scrollTop: top
    }, 800);
});

$(document).ready(function () {
    $('.js-toggle-menu').click(function (e) {
        e.preventDefault();
        $('.mobile-header-nav').slideToggle();
        $(this).toggleClass('open');
    });
    $(".link").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 0;
        $('body,html').animate({ scrollTop: top }, 700);
        if ($(window).width() < 992) {
            $('.mobile-header-nav').slideToggle();
            $('.js-toggle-menu').toggleClass('open');
        }
    });
});
function burger() {
    let bur = document.querySelector('.mobile-menu__container');
    bur.classList.toggle('h100');
    $('.header').toggleClass('black');
    $('.mobile-menu__icon').toggleClass('mobile-menu__icon2');
}


var but = document.querySelectorAll('.mobile-menu__link'); // находим все элементы с классом block
for (let i = 0; i < but.length; i++) { // проходим циклом по всем элементам объекта
    but[i].onclick = function () {
        document.querySelector('.mobile-menu__checkbox').checked = false;
        let bur = document.querySelector('.mobile-menu__container');
        bur.classList.toggle('h100');
        $('.header').toggleClass('black');
        $('.m-logo').toggleClass('d-none');
        $('.m-logo2').toggleClass('d-block');
        $('.mobile-menu__icon').toggleClass('mobile-menu__icon2');
    };

}