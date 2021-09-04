

<?php 
// include ("../class/adminback.php");
//     $obj = new adminback();

        $dbhost = "localhost";
        $dbuser = "root";
        $dbpass = "";
        $dbname = "ecommerce";

        $connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);


    if(isset($_POST['action'])){
        if($_POST['action']=='load_product'){
            $cataId= $_POST['cid'];
            $query = "SELECT * FROM `product_info_ctg` WHERE ctg_id=$cataId AND pdt_status=1";

           
           if(mysqli_query($connection, $query)){
                $html = '';
                $pdt_result = mysqli_query($connection, $query);

                foreach($pdt_result as $pdt_name){
                      $html .= '<option value="'.$pdt_name['pdt_id'].'">'.$pdt_name['pdt_name'].'</option>';
                }
                echo $html;
          
           }
        }
    }




    if(isset($_POST['action'])){
        if($_POST['action']=='load_price'){
            $pId= $_POST['pid'];
            $pricequery = "SELECT * FROM `product_info_ctg` WHERE `pdt_id`=$pId AND pdt_status=1";

           
           if(mysqli_query($connection, $pricequery)){
                $pricehtml = '';
                $price_result = mysqli_query($connection, $pricequery);

                foreach($price_result as $price){
                      $pricehtml .= $price["pdt_price"];

                      
                }
                echo $pricehtml;
          
           }
        }
    }


    if(isset($_POST['action'])){
        if($_POST['action']=='total_price'){
           $pdtId= $_POST['pdt_id'];
            $quantity = $_POST['quantity'];

            $singlepricequery = "SELECT * FROM `product_info_ctg` WHERE `pdt_id`=$pdtId AND pdt_status=1";

           
           if(mysqli_query($connection, $singlepricequery)){
                $single_price = '';
                $prices_res = mysqli_query($connection, $singlepricequery);

                foreach($prices_res as $sl_price){
                      $single_price .= $sl_price["pdt_price"];

                      
                }
                echo $single_price*$quantity;
          
           }
        }
    }

?>

    

