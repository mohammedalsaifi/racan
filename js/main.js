// height of slider

$(function ()  {
	'use strict';

	var winh   = $(window).height(),
	    upperh = $('.upper-bar').innerHeight(),
	    navh   = $('.navbar').innerHeight();

	$('.slider , .carousel-item').height(winh - (upperh + navh));

     // pointer the puttons

   /* $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    
    if ($(this).data('class') === 'all') {
        $('.shuffle-imgs .col-sm').css('opacity', 1);
    } else {
        $('.shuffle-imgs .col-sm').css('opacity', '.08');
        $($(this).data('class')).parent().css('opacity', 1);
    }

    });
    */

    });
        
    
    // back to_top

$(document).scroll(function () {

        var top = $(document).scrollTop();
        console.log(top);

        if (top > 50) {
            $('.back-top').fadeIn();
        } else {
            $('.back-top').fadeOut();
        }

    });

    $('.back-top').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 700);
    });

    $('.go-bottom').click(function () {
        var xx = ($(document).height()) / 2;

        $('html').animate({
            scrollTop: xx
        }, 1500);
    });

   