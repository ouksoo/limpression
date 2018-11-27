let LIM = {
    init: function() {
        this.skyScrapper();
        this.moveToId();
        this.linksDefault();
    },
    linksDefault: function() {
        $('h1').on('click', function(){
            location.href = '/';
        });
    },
    scollDown: function() {
        let scrolled = $(document).scrollTop();
        if(scrolled > 80) {
            $('.fixed-nav').addClass('scrolled');
        }
        else {
            $('.fixed-nav').removeClass('scrolled')
        }
    },
    skyScrapper: function() {
        $('a.skyscrapper').on('click', function(e){
            $('html, body').animate({
                scrollTop: 0,
            }, 800, function(){
                console.log('top');
            }); 
            e.preventDefault();            
        });
    },
    moveToId: function() {
        $('header a').on('click', function(e){
            const thisAnchor = $(this).attr('id');
            LIM.moveToAnchor(thisAnchor);
            e.preventDefault();
        });
    },
    moveToAnchor: function(aid) {
        const aTag = $('a[name="' + aid + '"]');
        $('html, body').animate({
            scrollTop: aTag.offset().top
        }, 500, function(){});
    },
}

// after loaded execute
window.onload = function() {
    LIM.init(); 

    // apply AOS plugin
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000
    }); 
};

$(window).scroll(function(e){
    LIM.scollDown();
});