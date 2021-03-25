
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    // $('.input100').each(function(){
    //     $(this).on('blur', function(){
    //         if($(this).val().trim() != "") {
    //             $(this).addClass('has-val');
    //         }
    //         else {
    //             $(this).removeClass('has-val');
    //         }
    //     })
    // })


    /*==================================================================
    [ Validate ]*/
    var firstname = $('.validate-input input[name="firstname"]');
    var surname = $('.validate-input input[name="surname"]');
    var email = $('.validate-input input[name="email"]');
    // var message = $('.validate-input textarea[name="message"]');

    $('.validate-form').on('submit',function(){
        var check = true;

        if($(firstname).val().trim() == ''){
            showValidate(name);
            check=false;
        }
        
        if($(surname).val().trim() == ''){
            showValidate(name);
            check=false;
        }

        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }

        // if($(message).val().trim() == ''){
        //     showValidate(message);
        //     check=false;
        // }

        return check;
    });


    $('.validate-form .input').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



})(jQuery);
