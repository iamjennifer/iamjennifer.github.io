/**

 Project Name :: /i.am.jennifer/ Online Portfolio
 Site :: iamjennifer.com

 ----------------------------------------------------------

 Copyright (c) 2018 jennifer howe. All rights reserved.

 @author Jennifer Howe
 @version 1.0 02/01/18

 ----------------------------------------------------------
 I have learned much from and used the plug-in where offered from:
 Lightbox by Lokesh Dhakar
 http://lokeshdhakar.com/

 **/

/**************************************************************/
/* main actions                                               */
/**************************************************************/
$(document).ready(function(){

    smoothScrolling();
    prepareList();

    $("#pageOneBtn").click(function(){
        var div = $("#pageOneCircleInside");
        div.animate({height:410},"slow");
        div.animate({width:'28.50%'},"slow");
    });





});


/**************************************************************/
/* animation for each section                                 */
/**************************************************************/
$(document).scroll(function () {

    var y = $(this).scrollTop();

    if (y > 700) {
        $('#sideNav').fadeIn();
        $('#upBtn').fadeIn();
        $('#whoDiv1').slideDown( "slow" );
        $('#whoDiv2').slideDown( "slow" );
    } else {
        $('#sideNav').fadeOut();
        $('#upBtn').fadeOut();
    }

    if (y > 1400) {
        $('#focusWrapper').slideDown( "slow" );
        $('#focusDiv1').delay(400).fadeIn();
        $('#focusDiv2').delay(800).fadeIn();
        $('#focusDiv3').delay(1200).fadeIn();
    }

    if (y > 2100) {
        $('#skillWrapper').slideDown( "slow" );
    }

    if (y > 2800) {
        $('#workWrapper').slideDown( "slow" );
        $('#workDiv1').delay(400).fadeIn();
        $('#workDiv2').delay(800).fadeIn();
        $('#workDiv3').delay(1200).fadeIn();
        $('#workDiv4').delay(1600).fadeIn();
        $('#workDiv5').delay(2000).fadeIn();
        $('#workDiv6').delay(2400).fadeIn();
        $('#workDiv7').delay(2800).fadeIn();
        $('#workDiv8').delay(3200).fadeIn();
    }

    if (y > 3500) {
        $('#interestWrapper').slideDown( "slow" );
        $('#interestDiv1').delay(500).fadeIn();
        $('#interestDiv2').delay(1000).fadeIn();
        $('#interestDiv3').delay(1200).fadeIn();
        $('#interestDiv4').delay(1600).fadeIn();
        $('#interestDiv5').delay(2000).fadeIn();
        $('#interestDiv6').delay(2400).fadeIn();
    }

    if (y > 4500) {
        $('#personDiv1').delay(100).fadeIn();
        $('#personDiv2').slideDown("slow");


    }

    if (y > 5100) {
        $('#twIcon').slideDown("slow");
        $('#fbIcon').slideDown("slow");
        $('#liIcon').slideDown("slow");
        $('#emIcon').slideDown("slow");
    }


});





/**************************************************************/
/* smooth scrolling                                           */
/**************************************************************/

function smoothScrolling(){
    // Add smooth scrolling to all links

    $('.smooth-scroll').on('click', function(event) {

        // // For testing
        // console.log("scrollingFunctionCalled");

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });





}

/**********************************************************************/
/* Prepares the cv (sidebar) to be dynamically expandable/collapsible */
/**********************************************************************/

function prepareList() {



    $('#expList').find('li:has(ul)')
        .click( function(event) {
            if (this == event.target) {
                $(this).toggleClass('expanded');
                $(this).children('ul').toggle('medium');
            }
            return false;
        })
        .addClass('collapsed')
        .children('ul').hide();

    //Hack to add links inside the cv (you need to add this part if you are not using smooth scrolling)
    // $('#expList a').unbind('click').click(function () {
    //
    //     window.open($(this).attr('href'),"_self");
    //
    //     return false;
    //
    // });


}


/**************************************************************/
/* timer animation for skill section                          */
/**************************************************************/

$({countNum: $('#counter1').text()}).animate({countNum: 88}, {
    duration: 1500,
    easing:'linear',
    step: function() {
        $('#counter1').text(Math.floor(this.countNum));
    },
    complete: function() {
    }
});

$({countNum: $('#counter2').text()}).animate({countNum: 93}, {
    duration: 1500,
    easing:'linear',
    step: function() {
        $('#counter2').text(Math.floor(this.countNum));
    },
    complete: function() {
    }
});

$({countNum: $('#counter3').text()}).animate({countNum: 85}, {
    duration: 1500,
    easing:'linear',
    step: function() {
        $('#counter3').text(Math.floor(this.countNum));
    },
    complete: function() {
    }
});

$({countNum: $('#counter4').text()}).animate({countNum: 79}, {
    duration: 1500,
    easing:'linear',
    step: function() {
        $('#counter4').text(Math.floor(this.countNum));
    },
    complete: function() {
    }
});

$({countNum: $('#counter5').text()}).animate({countNum: 81}, {
    duration: 1500,
    easing:'linear',
    step: function() {
        $('#counter5').text(Math.floor(this.countNum));
    },
    complete: function() {
    }
});

