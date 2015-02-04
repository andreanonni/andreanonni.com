//Jquery Palce your here
$( document ).ready(function() {
    //get dynamic height of divs
    var height = $( window ).height();
    $('section').height(height);
    
    //get home div positioned middle vertically
    if ($(window).width() > 1024) {
    var content = $('#home #content').height();
    var mtop = (height/2) - (content/2);
    $("#home #content").css('margin-top' , mtop);
    };
    //Scroll to div
    $('nav div a').click(function(){
        $('nav div a.active').removeClass('active');
        $(this).addClass('active');
         $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 350 );
        return false;
    });
    //Detect Div's pos on Scroll

});