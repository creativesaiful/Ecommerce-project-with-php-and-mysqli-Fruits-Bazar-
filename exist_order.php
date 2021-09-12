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

if (isset($_GET['logout'])) {
    if ($_GET['logout'] == "logout") {
        $obj->user_logout();
    }
}

if(isset($_SESSION['user_id'])){
        $id = $_SESSION['user_id'];
       
        $order_query =  $obj->order_details_by_id($id);
      

}else{
    header("location:user_login.php");
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





                                <table class="shop_table cart-form">
                                    <thead>
                                        <tr>
                                            <th class="product-name">Order Id</th>
                                            <th class="product-price">Products</th>
                                            <th class="product-quantity">Quantity</th>
                                            <th class="product-subtotal">Amount</th>
                                            <th class="product-subtotal">Order Status</th>
                                            <th class="product-subtotal">Placing Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    <?php while($order_info = mysqli_fetch_assoc($order_query)) {?>



                                                <tr class="cart_item">
                                                    <td class="product-thumbnail" data-title="Product Name">
                                                        <a class="prd-thumb" href="single_product.php?status=singleproduct&&id=<?php echo $order_info['order_id']  ?>">
                                                        <div class="price price-contain">
                                                            <span class="price-amount"><?php echo $order_info['order_id'] ?></span>

                                                        </div>
                                                        </a>
                                                        

                                                    </td>

                                                    <td class="" data-title="Product Name">
                                                        <a class="" href="single_product.php?status=singleproduct&&id=<?php echo $order_info['order_id']  ?>" style="text-decoration: none; color:black" >
                                                        <div class="price price-contain">
                                                            <h5 class="text-left" ><?php echo $order_info['product_name'] ?></h5>

                                                        </div>
                                                        </a>
                                                        

                                                    </td>

                                                    <td class="product-subtotal" data-title="Total">
                                                        <div class="price price-contain">
                                                            <ins><span class="price-amount"><span class="currencySymbol"></span><?php echo $order_info['pdt_quantity'] ?></span></ins>

                                                        </div>
                                                    </td>
                                      
                                                    <td class="product-subtotal" data-title="Total">
                                                        <div class="price price-contain">
                                                            <ins><span class="price-amount"><span class="currencySymbol">Tk. </span><?php echo $order_info['amount'] ?></span></ins>

                                                        </div>
                                                    </td>

                                                    <td class="product-subtotal" data-title="Total">
                                                        <div class="">
                                                            <span class="price-amount ">
                                                            <?php  
                                                            
                                                            if($order_info['order_status']==0){
                                                                  echo "<p class='btn btn-danger btn-sm'> Pending </p>";
                                                            }elseif($order_info['order_status']==1) {
                                                                echo "<p class='btn btn-warning btn-sm'> Processing </p>";
                                                            }
                                                            elseif($order_info['order_status']==2) {
                                                                echo "<p class='btn btn-success btn-sm'> Delivered </p>";
                                                              }    
                                                            ?>
                                                            
                                                        </span>

                                                        </div>
                                                    </td>

                                                    <td class="product-subtotal" data-title="Total">
                                                        <div class="price price-contain">
                                                          <span class="price-amount"><?php echo $order_info['order_time'] ?></span>

                                                        </div>
                                                    </td>


                                                </tr>

                                       <?php }?>


                                      



                                    </tbody>
                                </table>

                            
                              


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