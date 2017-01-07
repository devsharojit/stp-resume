/* 
 * Template Layouts & Styling
 * Name: Resume
 * Version: 1.0.0;
 * Author: Sharojit
 * Copyright: Free & Commercial
 * Author URI: http://www.sharojit.com/
 * Website: http://www.themesplugin.com/
 * Description: Resume Html5 responsive template
 * License: MIT
 */

jQuery(function ($) {
    // **************  START:: THEME SCRIPT  *************** //
    // **************************************************** //
    "use strict";

    //header social
    if ($('#stp-header-social').length) {
        $("#stp-header-social").click(function () {
            $("#stp-header .stp-social").slideToggle("slow");
        });
    }

    //simple scrolling script for thoes link who have a name with '#' like "#themesplugin"
    if ($('a[href*="#"]:not([href="#"])').length) {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1500);
                    return false;
                }
                document.location.href = String(document.location.href).replace(/#/, "");
            }
        });
    }

    /*
     * Filterable portfolio using oldest mixitup because, 
     * I don't need much functionlity for this project.
     * you can remove it and use what you want
     */
    if ($('#stp-projects').length) {
        $('#stp-projects').mixItUp();
    }

    //Contact form
    if ($("#stp-contact-form").length > 0) {
        // Get the form.
        var form = $('#stp-contact-form');

        // Get the messages div.
        var formMessages = $('#stp-messages');

        // Set up an event listener for the contact form.
        $(form).submit(function (e) {
            // Stop the browser from submitting the form.
            e.preventDefault();

            // Serialize the form data.
            var formData = $(form).serialize();

            // Submit the form using AJAX.
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
                    .done(function (response) {
                        // Make sure that the formMessages div has the 'alert-success' class.
                        $(formMessages).removeClass('alert-danger');
                        $(formMessages).addClass('alert-success');

                        // Set the message text.
                        $(formMessages).text(response);

                        // Clear the form.
                        $('#name').val('');
                        $('#email').val('');
                        $('#message').val('');
                    })
                    .fail(function (data) {
                        // Make sure that the formMessages div has the 'alert-danger' class.
                        $(formMessages).removeClass('alert-success');
                        $(formMessages).addClass('alert-danger');

                        // Set the message text.
                        if (data.responseText !== '') {
                            $(formMessages).text(data.responseText);
                        } else {
                            $(formMessages).text('Oops! An error occured and your message could not be sent.');
                        }
                    });

        });
    }

    //Get the current year in copyright
    if ($("span.stp-year").length > 0) {
        var currentYear = (new Date).getFullYear();
        $("span.stp-year").text(currentYear);
    }

    // **************  END:: THEME SCRIPT  *************** //
    // **************************************************** //
});