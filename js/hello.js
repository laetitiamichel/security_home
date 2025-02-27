// == PRELOADER ==
$(window).on("load", function() {
    setTimeout(function () {   hidePreloader();  }, 4000);
});

function hidePreloader() {
   $('.spinner').fadeOut("slow")
   $('.spinner-2').fadeIn("slow");

   setTimeout(function () { showPreloader()   }, 3000);
}

function showPreloader() {
    $('.spinner-wrapper').fadeOut(2000)
    $('body').removeClass('pre-loading'); // Remove scroll bar until the loader finish. Add "pre-loading" class to your body tag
}

// == END PRELOADER ==