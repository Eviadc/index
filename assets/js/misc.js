
$(function(){
    $('.collapse-head').each(function () {
        if(typeof $(this).attr('collapse-target') != 'undefined')
        {
            var func = 'return true;';
            var delay = typeof $(this).attr('collapse-delay') == 'undefined' ? 0 : parseInt($(this).attr('collapse-delay'));
            var status = 0;
            status = $(this).hasClass('collapse-only-show') ? status | 0x01 : status;
            status = $(this).hasClass('collapse-only-hide') ? status | 0x10 : status;
            if(status === 0) status = 0x11;
            var me = this;
            if(typeof $(this).attr('collapse-function') != 'undefined')
                func = $(this).attr('collapse-function');
            if(typeof $(this).attr('collapse-trigger') == 'undefined' || $(this).attr('collapse-trigger') == 'click')
                if(delay == 0)
                    $(this).click(function () {
                        if (eval('function a(){' + func + '};a();'))
                            if ((status & 0x01) && $($(this).attr('collapse-target')).css('display') == 'none')
                                $($(this).attr('collapse-target')).toggle('blind', null, 500);
                            else if((status & 0x10) && $($(this).attr('collapse-target')).css('display') != 'none')
                                $($(this).attr('collapse-target')).toggle('blind', null, 500);
                    });
                else
                    $(this).click(function () {
                        setTimeout(function (me) {
                            if(eval('function a(){' + func + '};a();'))
                                if ((status & 0x01) && $($(me).attr('collapse-target')).css('display') == 'none')
                                    $($(me).attr('collapse-target')).toggle('blind', null, 500);
                                else if((status & 0x10) && $($(me).attr('collapse-target')).css('display') != 'none')
                                    $($(me).attr('collapse-target')).toggle('blind', null, 500);
                        }, delay, me);
                    });
            else if($(this).attr('collapse-trigger') == 'keyup')
                $(this).keyup(function(){
                    if(eval('function(){' + func + '}'))
                        $($(this).attr('collapse-target')).toggle('blind', null, 500);
                })
        }
    });
    $('.valid-btn').each(function () {
        $(this).html('发送验证码');
        $(this).click(function () {
            $(this).attr('disabled', 'disabled');
            this.countdown = 60;
            this.intervalID = window.setInterval(function (target) {
                target.countdown--;
                if(target.countdown !== 0)
                    $(target).html('请稍候(' + target.countdown.toString() + ')');
                else
                {
                    clearInterval(target.intervalID);
                    $(target).html('获取验证码');
                    $(target).removeAttr('disabled');
                }
            }, 1000, this);
            $(this).html('请稍候(' + this.countdown.toString() + ')');
        })
    });
});