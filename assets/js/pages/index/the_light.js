
$(function(){
    function paint()
    {
        var canvas = $('#base_canvas')[0];
        var ctx = canvas.getContext('2d');
        var window_width = document.body.clientWidth;
        var window_height = document.body.clientHeight;
        var left_px = 0.2 * 2048 + 2;
        var width_px = 0.6 * 2048 - 4;
        var top_px = 0.05 * 2048;
        var height_px = 0.4  * window_width / window_height * 2048;

//            console.debug(left_px + '::' + width_px + '::' + top_px + '::' + height_px);

        ctx.clearRect(0, 0, 2048, 2048);

        var gl = ctx.createLinearGradient(0, 0, 0, 100);
        gl.addColorStop(0, 'black');
        gl.addColorStop(1, '#a1a1a1');
        ctx.fillStyle = gl;
        ctx.fillRect(0, 0, 2048, top_px);

        gl = ctx.createLinearGradient(0, top_px + height_px, 0, 2048);
        gl.addColorStop(0, '#c3c3c3');
        gl.addColorStop(1, 'black');
        ctx.fillStyle = gl;
        ctx.fillRect(0, top_px + height_px, 2048, 2048);

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(left_px, top_px);
        ctx.lineTo(left_px, top_px + height_px);
        ctx.lineTo(0, 2048);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(2048, 0);
        ctx.lineTo(left_px + width_px, top_px);
        ctx.lineTo(left_px + width_px, top_px + height_px);
        ctx.lineTo(2048, 2048);
        ctx.closePath();
        ctx.fill();
    }
    paint();
    $(window).resize(function(){
        paint();
    });
    $('#content-wrapper').show();
    $('#wait-wrapper').hide('fade', null, 500);
})