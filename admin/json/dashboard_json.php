<?php 
 $dbhost = "localhost";
 $dbuser = "root";
 $dbpass = "";
 $dbname = "ecommerce";

 $connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

 
 if(isset($_POST['action'])){
    if($_POST['action']=='load_allorder'){
        $date = $_POST['did'];


        $dayquery = "SELECT * FROM `all_order_info` WHERE `order_date` BETWEEN '$date' and CURDATE();";

       
       $row = mysqli_query($connection, $dayquery);
       $result = mysqli_num_rows($row);
       echo $result;

    }
}

if(isset($_POST['action'])){
    if($_POST['action']=='load_allsell'){
        $date = $_POST['did'];


    $sumQuery = "SELECT SUM(`amount`) AS `sum` FROM `all_order_info` WHERE `order_date` BETWEEN '$date' and CURDATE();";

       
       $sum_row = mysqli_query($connection, $sumQuery);
       $asos = mysqli_fetch_assoc($sum_row);
       echo $asos['sum'];

    }
}

if(isset($_POST['action'])){
    if($_POST['action']=='load_allcustomer'){
        $date = $_POST['did'];


        $cus_query = "SELECT * FROM `all_order_info` WHERE `order_date` BETWEEN '$date' and CURDATE() GROUP BY `customer_name`;";

       
       $cus_row = mysqli_query($connection, $cus_query);
       $cus_result = mysqli_num_rows($cus_row);
       echo $cus_result;

    }
}
?>