/**
 * Created by Nathan on 2017/4/24 0024.
 */

$(function(){
    function paint()
    {
        var window_width = document.body.clientWidth;
        var window_height = document.body.clientHeight;

        $('#white-placeholder').css('width', window_height + 'px');
    }
    paint();
    $(window).resize(function(){
        paint();
    });
    $('#content-wrapper').show();
    $('#wait-wrapper').hide('fade', null, 500);
})