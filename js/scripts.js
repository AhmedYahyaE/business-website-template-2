/* global $, window */
$(function () {
    'use strict';

    
    // Adjusting Header height to be as the window's height
    var myHeader = $('.header'), mySlider = $('.bxslider');

    myHeader.height($(window).height());

    $(window).resize(function () {
        myHeader.height($(window).height());

        // Vertical centering of the bxSlider li on resizing
        mySlider.each(function () {
            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2); // Or $(this).css('paddingTop', ($(window).height() - $('.bxslider').find('li').height()) / 2);
        });
    });


    
    // Adding the .active class to links (and removing it from the rest of the links at the same time)
    $('.links li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });


    
    // Vertical centering of the bxSlider li
    mySlider.each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2); // Or $(this).css('paddingTop', ($(window).height() - $('.bxslider').find('li').height()) / 2);
    });



    // Firing (triggering) the bxSlider
    mySlider.bxSlider({
        pager: false
    });


    
    // Smooth scrolling for the navbar without plugins
    $('.links li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top // Or scrollTop: $($(this).attr('href')).offset().top     without using custom attributes but note that u should edit href attributes in HTML giving every href a value
        }, 1500);
    });


    
    // My own Auto Slider (Without any plugins) -- Method 1
    (function autoSlider() {
        $('.slider .active').each(function () {
            
            
            if (!$(this).is(':last-child')) { // Or if ($(this).is(':not(:last-child)')) {
                $(this).delay(1500).fadeOut(1500, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                });

            // If it's the last child
            } else {
                $(this).delay(1500).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
            }
            
            
        });
    }()); // Self-invoking function
    
    // Mehod 2 for Slider
    /* (function autoSlider() {
        
        
        $('.slider .active').delay(1500).fadeOut(1500, function () {
            $(this).removeClass('active');
            
            var next = ($(this).index() + 1) % 5; // the remainig from the division(modulus) will be 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, ...etc.
            console.log(next);
            $('.slider div').eq(next).addClass('active').fadeIn();
            
            autoSlider();
        });
        
        
    }()); */
    
    // Method 3 for Slider
    /* (function autoSlider() {
        
        
        $('.slider div:gt(0)').hide(); // :gt() selector means index greater than... and there is :lt() which means index less than....By the way, u can remove this line as u don't need it cuz u did it already in CSS
        
        setInterval(function () {
            $('.slider div:eq(0)').fadeOut(1000).next().delay(1000).fadeIn(1000).end().appendTo('.slider'); // AppendTo(constantly changes the order of the divs) puts the current div at the end of the tree to let the 0-index div change every time the function runs
        },  2000);
        
        
    }()); */



    // Firing (triggering) MixItUp plugin
    var mixer = mixitup('#Container');



    // Adjusting shuffle links
    $('.shuffle li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });



    // Triggering Nicescroll plugin
    $('body').niceScroll({
        cursorcolor: '#1abc9c',
        cursorwidth: '10px',
        cursorborder: '1px solid #1abc9c',
        cursorborderradius: 0
    });
    
});