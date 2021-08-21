<?php 
    $top_rated = $obj->display_top_rated_pdt();

?>

<div class="advance-product-box">
                                <div class="biolife-title-box bold-style biolife-title-box__bold-style">
                                    <h3 class="title">Top Rated Products</h3>
                                </div>
                                <ul class="products biolife-carousel nav-center-03 nav-none-on-mobile row-space-29px" data-slick='{"rows":2,"arrows":true,"dots":false,"infinite":false,"speed":400,"slidesMargin":30,"slidesToShow":2,"responsive":[{"breakpoint":1200,"settings":{ "rows":2, "slidesToShow": 2}},{"breakpoint":992, "settings":{ "rows":2, "slidesToShow": 1}},{"breakpoint":768, "settings":{ "rows":2, "slidesToShow": 2}},{"breakpoint":500, "settings":{ "rows":2, "slidesToShow": 1}}]}'>
                                
                                <?php 
                                    while($top_pdt = mysqli_fetch_assoc($top_rated)){
                                       
                                ?>
                                
                                <li class="product-item">
                                        <div class="contain-product right-info-layout contain-product__right-info-layout">
                                            <div class="product-thumb">
                                                <a href="single_product.php?status=singleproduct&&id=<?php echo $top_pdt['pdt_id'] ?>" class="link-to-product">
                                                    <img src="admin/uploads/<?php echo $top_pdt['pdt_img']?>" alt="dd" width="270" height="270" class="product-thumnail">
                                                </a>
                                            </div>
                                            <div class="info">
                                                <b class="categories"><?php echo $top_pdt['ctg_name']?></b>
                                                <h4 class="product-title"><a href="single_product.php?status=singleproduct&&id=<?php echo $top_pdt['pdt_id'] ?>" class="pr-name"><?php echo $top_pdt['pdt_name']?></a></h4>
                                                <div class="price ">
                                                    <ins><span class="price-amount"><span class="currencySymbol">TK. </span><?php echo $top_pdt['pdt_price']?></span></ins>
                                                   
                                                </div>
                                                <div class="rating">
                                                    <p class="star-rating"><span class="width-80percent"></span></p>
                                                    <span class="review-count">(05 Reviews)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <?php }?>
                                </ul>
                                <div class="biolife-banner style-01 biolife-banner__style-01 sm-margin-top-30px xs-margin-top-80px">
                                    <div class="banner-contain">
                                        <a href="#" class="bn-link"></a>
                                        <div class="text-content">
                                            <span class="first-line">Daily Fresh</span>
                                            <b class="second-line">Natural</b>
                                            <i class="third-line">Fresh Food</i>
                                            <span class="fourth-line">Premium Quality</span>
                                        </div>
                                    </div>
                                </div>
                            </div>