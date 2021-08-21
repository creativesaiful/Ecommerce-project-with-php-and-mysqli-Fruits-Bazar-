
<?php 
  $five_catagory_result = $obj->display_five_catagory();

  $five_catagories = array();

  while($cata = mysqli_fetch_assoc($five_catagory_result)){
      $five_catagories[]=$cata;
  }

  $array_collum = array_column($five_catagories, "ctg_name");

  $eight_pdt_form_ctg_one = $obj->display_five_products(1);
  $eight_pdt_form_ctg_two = $obj->display_five_products(2);
  $eight_pdt_form_ctg_three = $obj->display_five_products(3);
  $eight_pdt_form_ctg_four = $obj->display_five_products(4);
  $eight_pdt_form_ctg_five = $obj->display_five_products(5);


  

?>



<div class="product-tab z-index-20 sm-margin-top-193px xs-margin-top-30px">
                <div class="container">
                    <div class="biolife-title-box">
                        <span class="subtitle">All the best item for You</span>
                        <h3 class="main-title">Related Products</h3>
                    </div>
                    <div class="biolife-tab biolife-tab-contain sm-margin-top-34px">
                        <div class="tab-head tab-head__icon-top-layout icon-top-layout">
                            <ul class="tabs md-margin-bottom-35-im xs-margin-bottom-40-im">
                                <li class="tab-element active">
                                    <a href="#tab01_1st" class="tab-link"><span class="biolife-icon icon-lemon"></span><?php echo $array_collum['0']; ?></a>
                                </li>
                                <li class="tab-element" >
                                    <a href="#tab01_2nd" class="tab-link"><span class="biolife-icon icon-grape2"></span></span><?php echo $array_collum['1']; ?></a>
                                </li>
                                <li class="tab-element" >
                                    <a href="#tab01_3rd" class="tab-link"><span class="biolife-icon icon-blueberry"></span></span><?php echo $array_collum['2']; ?></a>
                                </li>
                                <li class="tab-element" >
                                    <a href="#tab01_4th" class="tab-link"><span class="biolife-icon icon-orange"></span></span><?php echo $array_collum['3']; ?></a>
                                </li>
                                <li class="tab-element" >
                                    <a href="#tab01_5th" class="tab-link"><span class="biolife-icon icon-broccoli"></span></span><?php echo $array_collum['4']; ?></a>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-content">
                            <div id="tab01_1st" class="tab-contain active">
                                <ul class="products-list biolife-carousel nav-center-02 nav-none-on-mobile eq-height-contain" data-slick='{"rows":2 ,"arrows":true,"dots":false,"infinite":true,"speed":400,"slidesMargin":10,"slidesToShow":4, "responsive":[{"breakpoint":1200, "settings":{ "slidesToShow": 4}},{"breakpoint":992, "settings":{ "slidesToShow": 3, "slidesMargin":20}},{"breakpoint":768, "settings":{ "slidesToShow": 2, "slidesMargin":15}}]}'>

                                <?php 
                                    while($eight_pdt_ctg_one = mysqli_fetch_assoc($eight_pdt_form_ctg_one)){
                                ?>
                                    <li class="product-item">
                                        <div class="contain-product layout-default">
                                            <div class="product-thumb">
                                                <a href="single_product.php?status=singleproduct&&id=<?php echo $eight_pdt_ctg_one['pdt_id'] ?>" class="link-to-product">
                                                    <img src="admin/uploads/<?php echo $eight_pdt_ctg_one['pdt_img'] ?>" alt="Vegetables" width="270" height="270" class="product-thumnail">
                                                </a>
                                                <a class="lookup btn_call_quickview" href="#"><i class="biolife-icon icon-search"></i></a>
                                            </div>
                                            <div class="info">
                                                <b class="categories"><?php echo $eight_pdt_ctg_one['ctg_name'] ?></b>
                                                <h4 class="product-title"><a href="single_product.php?status=singleproduct&&id=<?php echo $eight_pdt['pdt_id'] ?>" class="pr-name"><?php echo $eight_pdt_ctg_one['pdt_name'] ?></a></h4>
                                                <div class="price ">
                                                    <ins><span class="price-amount"><span class="currencySymbol">TK. </span><?php echo $eight_pdt_ctg_one['pdt_price'] ?></span></ins>
                                                    
                                                </div>
                                                <div class="slide-down-box">
                                                    <p class="message">All products are carefully selected to ensure food safety.</p>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <?php }?>
  
                                </ul>
                            </div>
                            <div id="tab01_2nd" class="tab-contain ">
                                <ul class="products-list biolife-carousel nav-center-02 nav-none-on-mobile eq-height-contain" data-slick='{"rows":2 ,"arrows":true,"dots":false,"infinite":true,"speed":400,"slidesMargin":10,"slidesToShow":4, "responsive":[{"breakpoint":1200, "settings":{ "slidesToShow": 4}},{"breakpoint":992, "settings":{ "slidesToShow": 3, "slidesMargin":20}},{"breakpoint":768, "settings":{ "slidesToShow": 2, "slidesMargin":15}}]}'>

                                <?php while($eight_pdt_ctg_two = mysqli_fetch_assoc($eight_pdt_form_ctg_two)){ ?>
                                    <li class="product-item">
                                        <div class="contain-product layout-default">
                                            <div class="product-thumb">
                                                <a href="single_product.php?status=singleproduct&&id=<?php echo $eight_pdt_ctg_two['pdt_id'] ?>" class="link-to-product">
                                                    <img src="admin/uploads/<?php echo $eight_pdt_ctg_two['pdt_img']?>" alt="Vegetables" width="270" height="270" class="product-thumnail">
                                                </a>
                                                <a class="lookup btn_call_quickview" href="#"><i class="biolife-icon icon-search"></i></a>
                                            </div>
                                            <div class="info">
                                                <b class="categories"><?php echo $eight_pdt_ctg_two['ctg_name']?></b>
                                                <h4 class="product-title"><a href="single_product.php?status=singleproduct&&id=<?php echo $eight_pdt_ctg_two['pdt_id'] ?>" class="pr-name"><?php echo $eight_pdt_ctg_two['pdt_name']?></a></h4>
                                                <div class="price ">
                                                    <ins><span class="price-amount"><span class="currencySymbol">Tk. </span><?php echo $eight_pdt_ctg_two['pdt_price']?></span></ins>
                                                  
                                                </div>
                                                <div class="slide-down-box">
                                                    <p class="message">All products are carefully selected to ensure food safety.</p>
                                                  
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <?php }?>
                                   
                                </ul>
                            </div>
                            <div id="tab01_3rd" class="tab-contain ">
                                <ul class="products-list biolife-carousel nav-center-02 nav-none-on-mobile eq-height-contain" data-slick='{"rows":2 ,"arrows":true,"dots":false,"infinite":true,"speed":400,"slidesMargin":10,"slidesToShow":4, "responsive":[{"breakpoint":1200, "settings":{ "slidesToShow": 4}},{"breakpoint":992, "settings":{ "slidesToShow": 3, "slidesMargin":20}},{"breakpoint":768, "settings":{ "slidesToShow": 2, "slidesMargin":15}}]}'>
                                  

                                    <?php while($eight_pdt_ctg_three = mysqli_fetch_assoc($eight_pdt_form_ctg_three)){ ?>
                                    <li class="product-item">
                                        <div class="contain-product layout-default">
                                            <div class="product-thumb">
                                                <a href="single_product.php?status=singleproduct&&id=<?php echo $eight_pdt_ctg_three['pdt_id'] ?>" class="link-to-product">
                                                    <img src="admin/uploads/<?php echo $eight_pdt_ctg_three['pdt_img']?>" alt="Vegetables" width="270" height="270" class="product-thumnail">
                                                </a>
                                                <a class="lookup btn_call_quickview" href="#"><i class="biolife-icon icon-search"></i></a>
                                            </div>
                                            <div class="info">
                                                <b class="categories"><?php echo $eight_pdt_ctg_three['ctg_name']?></b>
                                                <h4 class="product-title"><a href="single_product.php?status=singleproduct&&id=<?php echo $eight_pdt_ctg_three['pdt_id'] ?>" class="pr-name"><?php echo $eight_pdt_ctg_three['pdt_name']?></a></h4>
                                                <div class="price ">
                                                    <ins><span class="price-amount"><span class="currencySymbol">Tk. </span><?php echo $eight_pdt_ctg_three['pdt_price']?></span></ins>
                                                  
                                                </div>
                                                <div class="slide-down-box">
                                                    <p class="message">All products are carefully selected to ensure food safety.</p>
                                                  
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <?php }?>
                                   
                                </ul>
                            </div>
                            <div id="tab01_4th" class="tab-contain ">
                                <ul class="products-list biolife-carousel nav-center-02 nav-none-on-mobile eq-height-contain" data-slick='{"rows":2 ,"arrows":true,"dots":false,"infinite":true,"speed":400,"slidesMargin":10,"slidesToShow":4, "responsive":[{"breakpoint":1200, "settings":{ "slidesToShow": 4}},{"breakpoint":992, "settings":{ "slidesToShow": 3, "slidesMargin":20}},{"breakpoint":768, "settings":{ "slidesToShow": 2, "slidesMargin":15}}]}'>

                                <?php while($eight_pdt_ctg_four = mysqli_fetch_assoc($eight_pdt_form_ctg_four)){ ?>
                                    <li class="product-item">
                                        <div class="contain-product layout-default">
                                            <div class="product-thumb">
                                                <a href="single_product.php?status=singleproduct&&id=<?php echo $eight_pdt_ctg_four['pdt_id'] ?>" class="link-to-product">
                                                    <img src="admin/uploads/<?php echo $eight_pdt_ctg_four['pdt_img']?>" alt="Vegetables" width="270" height="270" class="product-thumnail">
                                                </a>
                                                <a class="lookup btn_call_quickview" href="#"><i class="biolife-icon icon-search"></i></a>
                                            </div>
                                            <div class="info">
                                                <b class="categories"><?php echo $eight_pdt_ctg_four['ctg_name']?></b>
                                                <h4 class="product-title"><a href="single_product.php?status=singleproduct&&id=<?php echo $eight_pdt_ctg_four['pdt_id'] ?>" class="pr-name"><?php echo $eight_pdt_ctg_four['pdt_name']?></a></h4>
                                                <div class="price ">
                                                    <ins><span class="price-amount"><span class="currencySymbol">Tk. </span><?php echo $eight_pdt_ctg_four['pdt_price']?></span></ins>
                                                  
                                                </div>
                                                <div class="slide-down-box">
                                                    <p class="message">All products are carefully selected to ensure food safety.</p>
                                                  
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <?php }?>
                                   
                                </ul>
                            </div>
                            <div id="tab01_5th" class="tab-contain ">
                                <ul class="products-list biolife-carousel nav-center-02 nav-none-on-mobile eq-height-contain" data-slick='{"rows":2 ,"arrows":true,"dots":false,"infinite":true,"speed":400,"slidesMargin":10,"slidesToShow":4, "responsive":[{"breakpoint":1200, "settings":{ "slidesToShow": 4}},{"breakpoint":992, "settings":{ "slidesToShow": 3, "slidesMargin":20}},{"breakpoint":768, "settings":{ "slidesToShow": 2, "slidesMargin":15}}]}'>
                                <?php while($eight_pdt_ctg_five = mysqli_fetch_assoc($eight_pdt_form_ctg_five)){ ?>
                                    <li class="product-item">
                                        <div class="contain-product layout-default">
                                            <div class="product-thumb">
                                                <a href="single_product.php?status=singleproduct&&id=<?php echo $eight_pdt_ctg_five['pdt_id'] ?>" class="link-to-product">
                                                    <img src="admin/uploads/<?php echo $eight_pdt_ctg_five['pdt_img']?>" alt="Vegetables" width="270" height="270" class="product-thumnail">
                                                </a>
                                                <a class="lookup btn_call_quickview" href="#"><i class="biolife-icon icon-search"></i></a>
                                            </div>
                                            <div class="info">
                                                <b class="categories"><?php echo $eight_pdt_ctg_five['ctg_name']?></b>
                                                <h4 class="product-title"><a href="single_product.php?status=singleproduct&&id=<?php echo $eight_pdt_ctg_five['pdt_id'] ?>" class="pr-name"><?php echo $eight_pdt_ctg_five['pdt_name']?></a></h4>
                                                <div class="price ">
                                                    <ins><span class="price-amount"><span class="currencySymbol">Tk. </span><?php echo $eight_pdt_ctg_five['pdt_price']?></span></ins>
                                                  
                                                </div>
                                                <div class="slide-down-box">
                                                    <p class="message">All products are carefully selected to ensure food safety.</p>
                                                  
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <?php }?>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
