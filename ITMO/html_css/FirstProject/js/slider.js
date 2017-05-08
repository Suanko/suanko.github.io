jQuery(document).ready(function ($) {

    $(document).ready(function(){
        setInterval(function () {
            moveRight();
        }, 5000);
    });

    var slideCount = $('#viewport ul li').length;
    var slideWidth = $('#viewport ul li').width();
    var slideHeight = $('#viewport ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#viewport').css({ width: slideWidth, height: slideHeight });

    $('#viewport ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#viewport ul li:last-child').prependTo('#viewport ul');

    function moveLeft() {
        $('#viewport ul').animate({
            left: + slideWidth
        }, 1500, function () {
            $('#viewport ul li:last-child').prependTo('#viewport ul');
            $('#viewport ul').css('left', '');
        });
    };

    function moveRight() {
        $('#viewport ul').animate({
            left: - slideWidth
        }, 1500, function () {
            $('#viewport ul li:first-child').appendTo('#viewport ul');
            $('#viewport ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});    
