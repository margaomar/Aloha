  
    $('.carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true
    });

    // newsletter message
    $(".newsletter").on('submit','form',function(event){
        event.preventDefault();
        const $emailInput = $('#your-email');
        if ($emailInput.val().length!==0){
            alert("You're Welcome! Thanks for suscribing!");
        } else {
            alert("Please, enter your email address at first.");
        }
    });

    //smooth-scrolling
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });

    // fixed nav
    var wrap = $("#header");

    wrap.on("scroll", function(e) {
        
    if (this.scrollTop > 147) {
        wrap.addClass("fix-header");
    } else {
        wrap.removeClass("fix-header");
    }
    
    });

    //hide menu scroll down
    
        'use strict';
        
         var c, currentScrollTop = 0,
             navbar = $('header');
      
         $(window).scroll(function () {
            var a = $(window).scrollTop();
            var b = navbar.height();
           
            currentScrollTop = a;
           
            if (c < currentScrollTop && a > b + b) {
              navbar.addClass("scrollUp");
            } else if (c > currentScrollTop && !(a <= b)) {
              navbar.removeClass("scrollUp");
            }
            c = currentScrollTop;
        });

