<?php

session_start();
include_once("admin/class/adminback.php");
$obj = new adminback();

$cata_info = $obj->p_display_catagory();
$cataDatas = array();
while ($data = mysqli_fetch_assoc($cata_info)) {
    $cataDatas[] = $data;
}

// if (isset($_POST['user_login_btn'])) {
//     $logmsg = $obj->user_login($_POST);
// }

$userid = $_SESSION['user_id'];
$username = $_SESSION['username'];

if (empty($userid)) {
    header("location:user_login.php");
}

if (isset($_POST['remove_product'])) {
    foreach ($_SESSION['cart'] as $key => $value) {
        if ($value['pdt_name'] == $_POST['remove_pdt_name']) {
            unset($_SESSION['cart'][$key]);
            $_SESSION['cart'] = array_values($_SESSION['cart']);
        }
    }
}

if (isset($_GET['logout'])) {
    if ($_GET['logout'] == "logout") {
        $obj->user_logout();
    }
}

if (isset($_POST['confirm_order'])) {
    $obj->place_order($_POST);
}




?>


<?php
include_once("includes/head.php");
?>

<body class="biolife-body">
    <!-- Preloader -->

    <?php
    include_once("includes/preloader.php");
    ?>

    <!-- HEADER -->
    <header id="header" class="header-area style-01 layout-03">

        <?php
        include_once("includes/header_top.php");
        ?>

        <?php
        include_once("includes/header_middle.php");
        ?>

        <?php
        include_once("includes/header_bottom.php");
        ?>

    </header>

    <!-- Page Contain -->
    <div class="page-contain">

        <!-- Main content -->
        <div id="main-content" class="main-content">




            <div class="container">


                <div class="row">
                    <div class="col-md-2">
                        <h4>Hello <?php
                                    if (isset($username)) {
                                        echo strtoupper($username);
                                    }
                                    ?></h4>
                        <a href="?logout=logout">Logout</a>
                    </div>

                    <div class="col-md-10">
                        <h2 class="text-center">Order Sumary</h2>

                        <?php


                        if (isset($_SESSION['cart'])) {
                            if (count($_SESSION['cart']) > 0) {
                        ?>




                                <table class="shop_table cart-form">
                                    <thead>
                                        <tr>
                                            <th class="product-name">Product Name</th>
                                            <th class="product-price">Quantity</th>
                                            <th class="product-quantity">Remove</th>
                                            <th class="product-subtotal">Sub Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>



                                        <?php if (isset($_SESSION['cart'])) {

                                            $_SESSION['subtotal'] = 0;
                                            $_SESSION['cart_pdt_number'] = 0;
                                            $order_names = '';


                                            foreach ($_SESSION['cart'] as $key => $value) {
                                                $_SESSION['subtotal'] =  $_SESSION['subtotal'] + $value['pdt_price'];
                                                $_SESSION['cart_pdt_number']++;
                                                $order_names = $value['pdt_name'] . "<br> " . $order_names;


                                        ?>
                                                <tr class="cart_item">
                                                    <td class="product-thumbnail" data-title="Product Name">
                                                        <a class="prd-thumb" href="single_product.php?status=singleproduct&&id=<?php echo $value['pdt_id'] ?>">
                                                            <figure><img width="113" height="113" src="admin/uploads/<?php echo $value['pdt_img'] ?>" alt="shipping cart"></figure>
                                                        </a>
                                                        <a class="prd-name" href="single_product.php?status=singleproduct&&id=<?php echo $value['pdt_id'] ?>"><?php echo $value['pdt_name'] ?></a>

                                                    </td>
                                                    <td class="product-price" data-title="Price">
                                                        <div class="">
                                                            <input type="number" value="1" name="quantity" class="quantity" style="width: 65px;">

                                                        </div>
                                                    </td>
                                                    <td class="product-quantity" data-title="Quantity">
                                                        <form action="" method="POST">

                                                            <input type="hidden" value="<?php echo $value['pdt_name'] ?>" name="remove_pdt_name">
                                                            <input class="btn btn-warning" type="submit" value="Remove Product" name="remove_product">
                                                        </form>
                                                    </td>
                                                    <td class="product-subtotal" data-title="Total">
                                                        <div class="price price-contain">
                                                            <ins><span class="price-amount "><?php echo $value['pdt_price'] ?></span></ins>
                                                           
                                                        </div>
                                                    </td>
                                                </tr>





                                        <?php }
                                        } else {
                                            echo "Your cart is empty";
                                        } ?>

                                      

                                        <tr class="cart_item wrap-buttons">
                                            <td class="wrap-btn-control" colspan="3">
                                                <h2>Total ( <?php echo  $_SESSION['cart_pdt_number']; ?> Items)</h2>
                                            </td>

                                            <td>
                                                <h2>Tk. <?php echo $_SESSION['subtotal'] ?> </h2>
                                            </td>
                                        </tr>

                                        <tr class="cart_item wrap-buttons">
                                            <td>
                                                <h3 style="color: black;">Payment</h3>
                                            </td>

                                            <form class="shopping-cart-form" action="#" method="POST">

                                                <td colspan="3">
                                                    <input type="text" style="border: none; width:100%;" placeholder="input bKash TXID" name="txid" required>
                                                </td>

                                        </tr>

                                        <tr class="cart_item wrap-buttons">
                                            <td>

                                                <h3 style="color: black;">Shiping Address</h3>
                                            </td>
                                            <td colspan="3">


                                                <input type="text" style="border: none; width:100%" placeholder="input courier service and location" name="shiping" required>
                                            </td>

                                        </tr>




                                    </tbody>
                                </table>




                                <input type="hidden" name="user_id" value="<?php echo $_SESSION['user_id'] ?>">
                                <input type="hidden" name="product_name" value="<?php echo $order_names ?>">
                                <input type="hidden" name="product_item" value="<?php echo $_SESSION['cart_pdt_number'] ?>">
                                <input type="hidden" name="amount" value="<?php echo $_SESSION['subtotal'] ?>">
                                <input type="hidden" name="order_status" value="0">



                                <div class="btn-checkout">

                                    <input type="submit" class="btn btn-success btn-block btn-lg " value="Confirm Order" name="confirm_order">

                                </div>
                                </form>

                        <?php
                            } else {
                                echo "your cart is empty";
                            }
                        }
                        ?>

                    </div>
                </div>









            </div>






        </div>
    </div>
    <br>
    <!-- FOOTER -->

    <?php
    include_once("includes/footer.php");
    ?>

    <!--Footer For Mobile-->
    <?php
    include_once("includes/mobile_footer.php");
    ?>

    <?php
    include_once("includes/mobile_global.php")
    ?>


    <!-- Scroll Top Button -->
    <a class="btn-scroll-top"><i class="biolife-icon icon-left-arrow"></i></a>

    <?php
    include_once("includes/script.php")
    ?>
</body>

</html>