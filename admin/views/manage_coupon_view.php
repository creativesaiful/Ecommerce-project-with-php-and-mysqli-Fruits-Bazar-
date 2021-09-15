<?php 
    $show_coupon = $obj->show_coupon();
 
    
?>

<h2>Manage Coupon</h2>

<table class="table table-bordered table-striped">
    <thead>
        <tr>
            <th>Coupon Id</th>
            <th>Coupon Code</th>
            <th>Coupon Description</th>
            <th>Coupon Discount</th>
            <th>Action</th>
        </tr>
    </thead>

    <tbody>
            <?php 
               while($result = mysqli_fetch_assoc($show_coupon) ){
            ?>
        <tr>
            <td> <?php echo $result['cupon_id'] ?></td>
            <td> <?php echo $result['cupon_code'] ?></td>
            <td> <?php echo $result['description'] ?></td>
            <td> <?php echo $result['discount'] ?></td>
            <td><a href="">Edit</a>  <a href="">Delete</a>  </td>
           
        </tr>

        <?php }?>
    </tbody>
</table>