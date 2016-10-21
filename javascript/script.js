$(document).ready(function () {
    $('[data-mobile-menu-button]').click(function () {
        $('[data-mobile-menu]').toggle();
        $('.mobile-menu').toggleClass('open');
    });

    $('[data-desktop-menu-button]').click(function () {
        $('[data-desktop-menu]').toggle();
    });
});
