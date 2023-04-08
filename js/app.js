$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('.back-transparent').addClass('scrolled');
    } else {
        $('.back-transparent').removeClass('scrolled');
    }
});

$(window).on('resize', function() {
    if (window.innerWidth <= 766) {
        $('.elementor-element-3a28ce5').removeAttr('style');
      } else {
        $('.elementor-element-3a28ce5').css('margin-top', '0px');
    }
});
