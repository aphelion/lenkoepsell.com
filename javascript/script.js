$(document).ready(function () {
    $('[data-mobile-menu-button]').click(function () {
        $('[data-mobile-menu]').slideToggle();
        $('.mobile-menu').toggleClass('open', 400);
    });

    $('[data-mobile-menu-plays-button]').click(function () {
        $('[data-mobile-menu-plays]').slideToggle();
    });

    $('[data-desktop-menu-plays-button]').click(function () {
        $('[data-desktop-menu-plays]').slideToggle();
    });
});
