console.log("el radi?");

$(function(){
    $('#name').keyup(function(){

        if ($(this).val().length == 0) {
            $('.sh-email').hide();
        } else {
            $('.sh-email').show();
        }

    }).keyup();

    $('#email').keyup(function(){

        if ($(this).val().length == 0) {
            $('.sh-text').hide();
        } else {
            $('.sh-text').show();
        }

    }).keyup();

    $('#message').keyup(function(){

        if ($(this).val().length == 0) {
            $('.sh-submit').hide();
        } else {
            $('.sh-submit').show();
        }
        
    }).keyup();
});
