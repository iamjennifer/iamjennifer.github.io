/**

 Project Name :: /i.am.jennifer/ Online Portfolio
 Site :: iamjennifer.com

 ----------------------------------------------------------

 Copyright (c) 2018 jennifer howe. All rights reserved.

 @author Jennifer Howe
 @version 1.0 02/01/18

 ----------------------------------------------------------
 I have learned much from and used the plug-in where offered from:

 **/



/**************************************************************/
/* smooth scrolling                                           */
/**************************************************************/

$(document).ready(function(){
    // Add smooth scrolling to all links

    $("a").on('click', function(event) {

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
});




