$(document).ready(function () {
    $('[data-mobile-menu-button]').click(function () {
        $('[data-mobile-menu]').slideToggle();
        $('.mobile-menu').toggleClass('open', 400);
    });

    $('[data-desktop-menu-button]').click(function () {
        $('[data-desktop-menu]').slideToggle();
    });
});
