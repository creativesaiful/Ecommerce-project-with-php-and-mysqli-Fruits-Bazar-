<?php
$pdt_info = $obj->display_product_byCata(1);
$pdt_datas = array();
while ($pdt_ftecth = mysqli_fetch_assoc($pdt_info)) {
    $pdt_datas[] = $pdt_ftecth;
}
?>
<div class="special-slide">
    <div class="container">
        <ul class="biolife-carousel dots_ring_style" data-slick='{"arrows": false, "dots": true, "slidesMargin": 30, "slidesToShow": 1, "infinite": true, "speed": 800, "responsive":[{"breakpoint":1200, "settings":{ "slidesToShow": 1}},{"breakpoint":768, "settings":{ "slidesToShow": 2, "slidesMargin":20, "dots": false}},{"breakpoint":480, "settings":{ "slidesToShow": 1}}]}'>

            <?php
            foreach ($pdt_datas as $pdt_data) {
            ?>


                <li>

                    <div class="slide-contain biolife-banner__special">
                        <div class="banner-contain">
                            <div class="media">
                                <a href="single_product.php?status=singleproduct&&id=<?php echo $pdt_data['pdt_id'] ?>" class="bn-link">
                                    <figure><img src="admin/uploads/<?php echo $pdt_data['pdt_img'] ?>" width="616" height="483" alt=""></figure>
                                </a>
                            </div>
                            <a href="single_product.php?status=singleproduct&&id=<?php echo $pdt_data['pdt_id'] ?>">
                                <div class="text-content">
                                    <b class="first-line">Special Items</b>
                                    <span class="second-line"><?php echo $pdt_data['pdt_name'] ?></span>

                                    <div class="product-detail">

                                        <div class="price price-contain">
                                            <ins><span class="price-amount"><span class="currencySymbol">TK. </span><?php echo $pdt_data['pdt_price'] ?></span></ins>

                                           
                                        </div>
                                    
                                        <h4 class="product-name "><?php echo $pdt_data['pdt_des'] ?></h4>


                                    </div>
                                    
                                   
                                </div>

                            </a>
                        </div>
                    </div>


                </li>
            <?php } ?>


        </ul>
        <div class="biolife-service type01 biolife-service__type01 sm-margin-top-0 xs-margin-top-45px">
            <b class="txt-show-01">100%Nature</b>
            <i class="txt-show-02">Fresh Fruits</i>
            <ul class="services-list">
                <li>
                    <div class="service-inner color-reverse">
                        <span class="number">1</span>
                        <span class="biolife-icon icon-beer"></span>
                        <a class="srv-name" href="#">full stamped product</a>
                    </div>
                </li>
                <li>
                    <div class="service-inner color-reverse">
                        <span class="number">2</span>
                        <span class="biolife-icon icon-schedule"></span>
                        <a class="srv-name" href="#">place and delivery on time</a>
                    </div>
                </li>
                <li>
                    <div class="service-inner color-reverse">
                        <span class="number">3</span>
                        <span class="biolife-icon icon-car"></span>
                        <a class="srv-name" href="#">Free shipping in the city</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>