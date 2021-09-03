<?php

$obj = new adminback();
$links = $obj->display_links();
$link = mysqli_fetch_assoc($links);

?>



<div class="header-bottom hidden-sm hidden-xs">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-4">

                <?php
                include_once("vertical_menu.php")
                ?>
            </div>
            <div class="col-lg-9 col-md-8 padding-top-2px">

                <?php
                include_once("search_bar.php")
                ?>

                <div class="live-info">
                    <p class="telephone"><i class="fa fa-phone" aria-hidden="true"></i><b class="phone-number"> <?php echo $link['phone'] ?> </b></p>
                    <p class="working-time">Mon-Fri: 8:30am-7:30pm; Sat-Sun: 9:30am-4:30pm</p>
                </div>
            </div>
        </div>
    </div>
</div>