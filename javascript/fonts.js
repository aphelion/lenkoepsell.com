var fontsLoaded = $.Callbacks();

WebFont.load({
    google: {
        families: ['Abril Fatface', 'Cutive Mono', 'Oswald', 'Playfair Display SC']
    },
    active: function () {
        fontsLoaded.fire();
    }
});

$(function () {
    $('.first-name').bigtext();
    $('.last-name').bigtext();

    fontsLoaded.add(function () {
        $('.first-name').bigtext();
        $('.last-name').bigtext();
    });
});
