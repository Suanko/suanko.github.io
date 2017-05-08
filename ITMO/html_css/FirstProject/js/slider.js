jQuery(document).ready(function ($) {

    $(document).ready(function(){
        setInterval(function () {
            moveRight();
        }, 7000);
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
        }, 500, function () {
            $('#viewport ul li:last-child').prependTo('#viewport ul');
            $('#viewport ul').css('left', '');
        });
    };

    function moveRight() {
        $('#viewport ul').animate({
            left: - slideWidth
        }, 500, function () {
            $('#viewport ul li:first-child').appendTo('#viewport ul');
            $('#viewport ul').css('left', '');
        });
    };

    $('#prev-btn').click(function () {
        moveLeft();
    });

    $('#next-btn').click(function () {
        moveRight();
    });

});    
