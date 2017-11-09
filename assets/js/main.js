/*====================================
            Preloader
======================================*/

$(window).load(function() {

    var preloaderDelay = 400,
        preloaderFadeOutTime = 1800;

    function hidePreloader() {
        var loadingAnimation = $('#loading-animation'),
            preloader = $('#preloader');

        loadingAnimation.fadeOut(preloaderFadeOutTime);
        preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime);
    }

    hidePreloader();

});

$('.navbar-toggle').click(function(){
   $('.ham').toggleClass('open'); 
});