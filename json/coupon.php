<?php 
 $dbhost = "localhost";
 $dbuser = "root";
 $dbpass = "";
 $dbname = "ecommerce";

 $connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

 if(isset($_POST['action'])){
    if($_POST['action']=='load_discount'){
        $coupon_code = $_POST['cupon'];
        $price = $_POST['price'];
        $query = "SELECT * FROM `cupon` WHERE `cupon_code`='$coupon_code' AND `status`=1";

        if(mysqli_query($connection, $query)){
            $result = mysqli_query($connection, $query);

            $discount = 0;
            foreach($result as $res){
                $discount = $res['discount'];
            }
            
            $dis = ($price * $discount/100);
            echo $dis;
        }else{
            echo 0;
        }

    }
 }




?>