<div class="bar-fill fill absolute" id="wait-wrapper" style="background: black; z-index: 999">
</div>
<div class="hide bar-fill fill" id="content-wrapper">
    <canvas class="bar-fill fill" id="base_canvas" width="2048" height="2048" ></canvas>
    <div class="absolute bar-6" id="img-container" style="left: 20%; top: 5%">
        <img class="bar-fill" src="<?php echo base_url('assets/image/photo/The_Light_'.($variation == 0 ? '' : 'HighV_').'web.jpg')?>">
    </div>
</div>
<div class="wrapper bar-fill" id="nav-bar">
    <div class="text-middle nav-bar">
        <a href="<?php echo base_url()?>">HOME</a>
        <a href="<?php echo base_url('kamigaku/')?>">KAMIGAKU</a>
        <a href="<?php echo site_url('diaries/')?>">DIARIES</a>
        <a href="<?php echo base_url('wx/')?>">WECHAT</a>
        <a href="<?php echo base_url()?>">ABOUT</a>
    </div>
</div>
