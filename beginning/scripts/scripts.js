$(document).ready(function() {
            //open modal
            $('.open-modal-btn').click(function() {
                $($(this).data('target')).show();
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
        });