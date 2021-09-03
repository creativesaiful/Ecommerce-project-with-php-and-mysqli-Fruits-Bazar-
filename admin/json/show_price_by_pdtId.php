<?php 
include ("../class/adminback.php");
    $obj = new adminback();
 
   $id = $_GET['pid'];

    $pdt_info =  $obj->display_product_byId($id);
   

    while($row = mysqli_fetch_assoc($pdt_info)){

        echo $row['pdt_price'];
 }?>