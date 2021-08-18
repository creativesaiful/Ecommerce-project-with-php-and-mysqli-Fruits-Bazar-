<div class="header-middle biolife-sticky-object ">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-2 col-md-6 col-xs-6">
                <a href="home-03-green.html" class="biolife-logo"><img src="assets/images/organic-3-green.png" alt="biolife logo" width="135" height="36"></a>
            </div>
            <div class="col-lg-6 col-md-7 hidden-sm hidden-xs">
                <div class="primary-menu">
                    <ul class="menu biolife-menu clone-main-menu clone-primary-menu" id="primary-menu" data-menuname="main menu">

                        <?php
                        foreach ($cataDatas as $cataData) {
                        ?>

                            <li class="menu-item"><a href="catagory.php?status=catView&&id=<?php echo $cataData['ctg_id'] ?>"><?php echo $cataData['ctg_name'] ?></a></li>

                        <?php } ?>
                    </ul>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-md-6 col-xs-6">
                <div class="biolife-cart-info">
                    <div class="mobile-search">
                        <a href="javascript:void(0)" class="open-searchbox"><i class="biolife-icon icon-search"></i></a>
                        <div class="mobile-search-content">
                            <form action="#" class="form-search" name="mobile-seacrh" method="get">
                                <a href="#" class="btn-close"><span class="biolife-icon icon-close-menu"></span></a>
                                <input type="text" name="s" class="input-text" value="" placeholder="Search here...">
                                <select name="category">
                                    <option value="-1" selected>All Categories</option>
                                    <option value="vegetables">Vegetables</option>
                                    <option value="fresh_berries">Fresh Berries</option>
                                    <option value="ocean_foods">Ocean Foods</option>
                                    <option value="butter_eggs">Butter & Eggs</option>
                                    <option value="fastfood">Fastfood</option>
                                    <option value="fresh_meat">Fresh Meat</option>
                                    <option value="fresh_onion">Fresh Onion</option>
                                    <option value="papaya_crisps">Papaya & Crisps</option>
                                    <option value="oatmeal">Oatmeal</option>
                                </select>
                                <button type="submit" class="btn-submit">go</button>
                            </form>
                        </div>
                    </div>
                    <div class="wishlist-block hidden-sm hidden-xs">
                        <a href="#" class="link-to">
                            <span class="icon-qty-combine">
                                <i class="icon-heart-bold biolife-icon"></i>
                                <span class="qty">4</span>
                            </span>
                        </a>
                    </div>
                    <div class="minicart-block">
                        <div class="minicart-contain">
                            <a href="javascript:void(0)" class="link-to">
                                <span class="icon-qty-combine">
                                    <i class="icon-cart-mini biolife-icon"></i>
                                    <span class="qty">8</span>
                                </span>
                                <span class="title">My Cart -</span>
                                <span class="sub-total">$0.00</span>
                            </a>
                            <div class="cart-content">
                                <div class="cart-inner">
                                    <ul class="products">
                                        <li>
                                            <div class="minicart-item">
                                                <div class="thumb">
                                                    <a href="#"><img src="assets/images/minicart/pr-01.jpg" width="90" height="90" alt="National Fresh"></a>
                                                </div>
                                                <div class="left-info">
                                                    <div class="product-title"><a href="#" class="product-name">National Fresh Fruit</a></div>
                                                    <div class="price">
                                                        <ins><span class="price-amount"><span class="currencySymbol">£</span>85.00</span></ins>
                                                        <del><span class="price-amount"><span class="currencySymbol">£</span>95.00</span></del>
                                                    </div>
                                                    <div class="qty">
                                                        <label for="cart[id123][qty]">Qty:</label>
                                                        <input type="number" class="input-qty" name="cart[id123][qty]" id="cart[id123][qty]" value="1" disabled>
                                                    </div>
                                                </div>
                                                <div class="action">
                                                    <a href="#" class="edit"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                                    <a href="#" class="remove"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="minicart-item">
                                                <div class="thumb">
                                                    <a href="#"><img src="assets/images/minicart/pr-02.jpg" width="90" height="90" alt="National Fresh"></a>
                                                </div>
                                                <div class="left-info">
                                                    <div class="product-title"><a href="#" class="product-name">National Fresh Fruit</a></div>
                                                    <div class="price">
                                                        <ins><span class="price-amount"><span class="currencySymbol">£</span>85.00</span></ins>
                                                        <del><span class="price-amount"><span class="currencySymbol">£</span>95.00</span></del>
                                                    </div>
                                                    <div class="qty">
                                                        <label for="cart[id124][qty]">Qty:</label>
                                                        <input type="number" class="input-qty" name="cart[id124][qty]" id="cart[id124][qty]" value="1" disabled>
                                                    </div>
                                                </div>
                                                <div class="action">
                                                    <a href="#" class="edit"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                                    <a href="#" class="remove"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="minicart-item">
                                                <div class="thumb">
                                                    <a href="#"><img src="assets/images/minicart/pr-03.jpg" width="90" height="90" alt="National Fresh"></a>
                                                </div>
                                                <div class="left-info">
                                                    <div class="product-title"><a href="#" class="product-name">National Fresh Fruit</a></div>
                                                    <div class="price">
                                                        <ins><span class="price-amount"><span class="currencySymbol">£</span>85.00</span></ins>
                                                        <del><span class="price-amount"><span class="currencySymbol">£</span>95.00</span></del>
                                                    </div>
                                                    <div class="qty">
                                                        <label for="cart[id125][qty]">Qty:</label>
                                                        <input type="number" class="input-qty" name="cart[id125][qty]" id="cart[id125][qty]" value="1" disabled>
                                                    </div>
                                                </div>
                                                <div class="action">
                                                    <a href="#" class="edit"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                                    <a href="#" class="remove"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="minicart-item">
                                                <div class="thumb">
                                                    <a href="#"><img src="assets/images/minicart/pr-04.jpg" width="90" height="90" alt="National Fresh"></a>
                                                </div>
                                                <div class="left-info">
                                                    <div class="product-title"><a href="#" class="product-name">National Fresh Fruit</a></div>
                                                    <div class="price">
                                                        <ins><span class="price-amount"><span class="currencySymbol">£</span>85.00</span></ins>
                                                        <del><span class="price-amount"><span class="currencySymbol">£</span>95.00</span></del>
                                                    </div>
                                                    <div class="qty">
                                                        <label for="cart[id126][qty]">Qty:</label>
                                                        <input type="number" class="input-qty" name="cart[id126][qty]" id="cart[id126][qty]" value="1" disabled>
                                                    </div>
                                                </div>
                                                <div class="action">
                                                    <a href="#" class="edit"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                                    <a href="#" class="remove"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="minicart-item">
                                                <div class="thumb">
                                                    <a href="#"><img src="assets/images/minicart/pr-05.jpg" width="90" height="90" alt="National Fresh"></a>
                                                </div>
                                                <div class="left-info">
                                                    <div class="product-title"><a href="#" class="product-name">National Fresh Fruit</a></div>
                                                    <div class="price">
                                                        <ins><span class="price-amount"><span class="currencySymbol">£</span>85.00</span></ins>
                                                        <del><span class="price-amount"><span class="currencySymbol">£</span>95.00</span></del>
                                                    </div>
                                                    <div class="qty">
                                                        <label for="cart[id127][qty]">Qty:</label>
                                                        <input type="number" class="input-qty" name="cart[id127][qty]" id="cart[id127][qty]" value="1" disabled>
                                                    </div>
                                                </div>
                                                <div class="action">
                                                    <a href="#" class="edit"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                                    <a href="#" class="remove"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <p class="btn-control">
                                        <a href="#" class="btn view-cart">view cart</a>
                                        <a href="userprofile.php" class="btn">checkout</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mobile-menu-toggle">
                        <a class="btn-toggle" data-object="open-mobile-menu" href="javascript:void(0)">
                            <span></span>
                            <span></span>
                            <span></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>