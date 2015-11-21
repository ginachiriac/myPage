
wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
);
wow.init();

(function($){
    $(function() {
        var menu = $("#header");
        menu.removeAttr("style");
        menu.insertAfter($("#spw-panel1"));
        var menuOffset = menu.offset().top;


        $(window).scroll(function(){
            var scrollPos = $(window).scrollTop();
            if (scrollPos >= menuOffset) {
                menu.addClass("fixed");
            } else {
                menu.removeClass("fixed");
            }
        });

        //jQuery for page scrolling feature - requires jQuery Easing plugin
        $(function() {
            $('.page-scroll a').bind('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 500);
                event.preventDefault();
            });
        });
    });
})(jQuery);