<h2>Manage order</h2>

<?php

$catagories = $obj->display_catagory();
$all_order_info = $obj->all_order_info();

$order_infos = array();
while($all_order = mysqli_fetch_assoc($all_order_info)){
    $order_infos[] =$all_order; 
}

if(isset($_POST['update_status_btn'])){
   
   $status_msg =  $obj->updat_order_status($_POST);
}

if(isset( $status_msg)){
    echo  $status_msg ;
}


?>
<div>
    <table class="table table-striped">
        <thead>
            <tr>
                <th class="product-name">Order Id</th>
                <th class="product-price">Products</th>
                <th class="product-quantity">Quantity</th>
                <th class="product-subtotal">Amount</th>
                <th class="product-subtotal">Uses Coupon</th>
                <th class="product-subtotal">Customer Name</th>
                <th class="product-subtotal">Customer Mobile</th>
                <th class="product-subtotal">Trans No</th>
                <th class="product-subtotal">Shiping</th>
                <th class="product-subtotal">Order Status</th>
                <th class="product-subtotal">Update Status</th>
                <th class="product-subtotal">Placing Time</th>
            </tr>
        </thead>

        <tbody>

        <?php 
                foreach($order_infos as $order_info){
        ?>
        <tr>
                <td class="product-name"><?php echo $order_info['order_id'] ?></td>
                <td class="product-price"><?php echo $order_info['product_name'] ?></td>
                <td class="product-quantity"><?php echo $order_info['pdt_quantity'] ?></td>
                <td class="product-subtotal"><?php echo $order_info['amount'] ?></td>
                <td class="product-subtotal"><?php echo $order_info['uses_coupon'] ?></td>
                <td class="product-subtotal"><?php echo $order_info['customer_name'] ?></td>
                <td class="product-subtotal"><?php echo $order_info['Shipping_mobile'] ?></td>
                <td class="product-subtotal"><?php echo $order_info['trans_id'] ?></td>
                <td class="product-subtotal"><?php echo $order_info['shiping_address'] ?></td>
                <td class="product-subtotal">
                <?php 
                    if($order_info['order_status']==0){
                        echo "<p class='btn btn-danger btn-sm'> Pending </p>";
                    } elseif($order_info['order_status']==1){
                        echo "<p class='btn btn-warning btn-sm'> Processing </p>";
                    } elseif($order_info['order_status']==2){
                        echo "<p class='btn btn-success btn-sm'> Delivered </p>";
                    }
                ?>
                </td>

                <td class="product-subtotal">
                    <form action="manage_order.php" method="POST">
                        <select name="update_status">
                        <option>Select</option>
                            <option value="0">Pending</option>
                            <option value="1">Processing</option>
                            <option value="2">Deliverd</option>
                        </select> <br>
                        <input type="hidden" name="order_id" value="<?php echo $order_info['order_id']  ?>">
                        <input type="submit" value="update" name="update_status_btn">
                    </form>

                </td>
                <td class="product-subtotal"><?php echo $order_info['order_time'] ?></td>
            </tr>

                <?php }?>
        </tbody>
    </table>
</div>