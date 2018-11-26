'use strict';

var LIM = {
    init: function init() {
        this.skyScrapper();
        this.moveToId();
    },
    scollDown: function scollDown() {
        var scrolled = $(document).scrollTop();
        if (scrolled > 80) {
            $('.fixed-nav').addClass('scrolled');
        } else {
            $('.fixed-nav').removeClass('scrolled');
        }
    },
    skyScrapper: function skyScrapper() {
        $('a.skyscrapper').on('click', function (e) {
            $('html, body').animate({
                scrollTop: 0
            }, 800, function () {
                console.log('top');
            });
            e.preventDefault();
        });
    },
    moveToId: function moveToId() {
        $('header a').on('click', function (e) {
            var thisAnchor = $(this).attr('id');
            LIM.moveToAnchor(thisAnchor);
            e.preventDefault();
        });
    },
    moveToAnchor: function moveToAnchor(aid) {
        var aTag = $('a[name="' + aid + '"]');
        $('html, body').animate({
            scrollTop: aTag.offset().top
        }, 500, function () {});
    }

    // after loaded execute
};window.onload = function () {
    LIM.init();

    // apply AOS plugin
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000
    });
};

$(window).scroll(function (e) {
    LIM.scollDown();
});