
<?php 
    if(isset($_POST['cuopon_add'])){
       $coupon_msg =  $obj->add_coupon($_POST);
       
    }
?>

<h2>Add Coupon</h2>

<h4>
    <?php 
        if(isset($coupon_msg)){
            echo $coupon_msg;
        }
    ?>
</h4>

<div>
    <form action="" method="POST">
      
    <div class="form-group">
        <label for="cuopon_code">Coupon Code</label>
        <input type="text" name="cuopon_code" class="form-control" >
    </div>

    <div class="form-group">
        <label for="cuopon_description">Coupon Description</label>
        <input type="text" name="cuopon_description" class="form-control" >
    </div>

    <div class="form-group">
        <label for="cuopon_discount">Coupon Discount</label>
        <input type="number" name="cuopon_discount" class="form-control" >
    </div>

    <div class="form-group">
        <label for="cuopon_status">Coupon Discount</label>
        <select name="cuopon_status" class="form-control">
            <option disabled>--Select--</option>
            <option value="1">Active</option>
            <option value="2">Deactive</option>
        </select>
    </div>

    <div class="form-group">
       
        <input type="submit" name="cuopon_add" class="btn btn-primary" >
    </div>




       
    </form>
</div>
