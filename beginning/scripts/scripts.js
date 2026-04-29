$(document).ready(function() {
            //open modal
            $('.open-modal-btn').click(function() {
                $($(this).data('target')).show('modal-content');
            });

            //close modal
            $('.close-btn').click(function() {
                $(this).closest('.modal').hide();
            });

            //close modal if user is outside of it
            $(window).click(function() {
                if ($(event.target).is('.modal')) {
                    $('.modal').hide();
                }
            });

            // Accordion
            $('.accordion-header').click(function() {
                if ($(this).next('.accordion-content').is(':visible')) {
                    //if content is visible, slide up
                    $(this).next('.accordion-content').slideUp();
                } else {
                    //slide up all other content
                    $('.accordion-content').slideUp();
                    //slide down clicked content
                    $(this).next('.accordion-content').slideDown();
                }               
            });
        });