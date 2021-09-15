<?php

class  adminback
{
    private $connection;
    function __construct()
    {
        $dbhost = "localhost";
        $dbuser = "root";
        $dbpass = "";
        $dbname = "ecommerce";

        $this->connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

        if (!$this->connection) {
            die("Databse connection error!!!");
        }
    }

    function admin_login($data)
    {
        $admin_email = $data["admin_email"];
        $admin_pass = md5($data['admin_pass']);

        $query = "SELECT * FROM `admin_info` WHERE admin_email = '$admin_email' AND admin_pass = '$admin_pass'";

        if (mysqli_query($this->connection, $query)) {
            $result = mysqli_query($this->connection, $query);
            $admin_info = mysqli_fetch_assoc($result);
            if ($admin_info) {
                header("location:dashborad.php");
                session_start();
                $_SESSION['admin_id'] = $admin_info['admin_id'];
                $_SESSION['admin_email'] = $admin_info['admin_email'];
                $_SESSION['role'] = $admin_info['role'];
            } else {
                $log_msg = "Email or password wrong";
                return $log_msg;
            }
        }
    }

    function admin_logout()
    {
        unset($_SESSION['admin_id']);
        unset($_SESSION['admin_email']);
        unset($_SESSION['role']);
        header("location:index.php");
        session_destroy();
    }

    function admin_password_recover($recover_email)
    {
        $query = "SELECT * FROM `admin_info` WHERE `admin_email`='$recover_email'";
        if (mysqli_query($this->connection, $query)) {
            $row =  mysqli_query($this->connection, $query);
            return $row;
        }
    }

    function update_admin_password($data)
    {
        $u_admin_id = $data['admin_update_id'];
        $u_admin_pass = md5($data['admin_update_password']);

        $query = "UPDATE `admin_info` SET `admin_pass`='$u_admin_pass' WHERE `admin_id`= $u_admin_id";

        if (mysqli_query($this->connection, $query)) {
            $update_mag = "You password updated successfull";
            return $update_mag;
        } else {
            return "Failed";
        }
    }

    function add_admin_user($data){
        $user_email = $data['user_name'];
        $user_pass = md5($data['user_password']);
        $user_role = $data['user_role'];

        $query = "INSERT INTO `admin_info`( `admin_email`, `admin_pass`, `role`) VALUES ('$user_email','$user_pass',$user_role)";

        if(mysqli_query($this->connection, $query)){
            $msg="{$user_email} add as a user successfully";
            return $msg;
        }
    }

    function show_admin_user(){
        $query = "SELECT * FROM `admin_info`";
        if(mysqli_query($this->connection, $query)){
            $result = mysqli_query($this->connection, $query);
            return $result;
        }
    }

    function show_admin_user_by_id($user_id){
        $query = "SELECT * FROM `admin_info` WHERE `admin_id`=$user_id";
        if(mysqli_query($this->connection, $query)){
            $result = mysqli_query($this->connection, $query);
            return $result;
        }
    }

    function update_admin($data){
        $u_id = $data['user_id'];
        $u_email = $data['u-user-email'];
        $u_role = $data['u_user_role'];
        $query = "UPDATE `admin_info` SET `admin_email`='$u_email',`role`= $u_role WHERE `admin_id`= $u_id ";
        if(mysqli_query($this->connection, $query)){
            $up_msg = "Udated successfully";
            return $up_msg;
        }
        
    }

    function delete_admin($admin_id){
        $query = "DELETE FROM `admin_info` WHERE `admin_id`=$admin_id";
        if(mysqli_query($this->connection, $query)){
            $del_msg = "User Deleted Successfully";
            return $del_msg;
        }
    }

    function add_catagory($data)
    {
        $ctg_name = $data['ctg_name'];
        $ctg_des = $data['ctg_des'];
        $ctg_status = $data['ctg_status'];

        $query = "INSERT INTO `catagory`( `ctg_name`, `ctg_des`, `ctg_status`) VALUES ('$ctg_name','$ctg_des', $ctg_status)";

        if (mysqli_query($this->connection, $query)) {
            return "{$ctg_name} added as a catagory successfully!!";
        } else {
            return "Failed to add catagory";
        }
    }

    function display_catagory()
    {
        $query = "SELECT * FROM `catagory`";

        if (mysqli_query($this->connection, $query)) {
            $ctg_info = mysqli_query($this->connection, $query);
            return $ctg_info;
        }
    }

    function p_display_catagory()
    {
        $query = "SELECT * FROM `catagory` WHERE ctg_status=1";

        if (mysqli_query($this->connection, $query)) {
            $ctg_info = mysqli_query($this->connection, $query);
            return $ctg_info;
        }
    }

    function catagory_published($id)
    {
        $query = "UPDATE `catagory` SET `ctg_status`= 1 WHERE ctg_id = $id";
        mysqli_query($this->connection, $query);
    }
    function catagory_unpublished($id)
    {
        $query = "UPDATE `catagory` SET `ctg_status`= 0 WHERE ctg_id = $id";
        mysqli_query($this->connection, $query);
    }

    function delete_catagory($id)
    {
        $query = "DELETE FROM `catagory` WHERE  ctg_id = $id";
        mysqli_query($this->connection, $query);
    }

    function display_cataByID($id)
    {
        $query = "SELECT * FROM `catagory` WHERE ctg_id = $id";

        if (mysqli_query($this->connection, $query)) {
            $cata_info = mysqli_query($this->connection, $query);
            return mysqli_fetch_assoc($cata_info);
        }
    }

    function updata_catagory($data)
    {
        $u_ctg_id = $data['u_ctg_id'];
        $u_ctg_name = $data['u_ctg_name'];
        $u_ctg_des = $data['u_ctg_des'];
        $u_ctg_status = $data['u_ctg_status'];

        $query = "UPDATE `catagory` SET `ctg_name`='$u_ctg_name',`ctg_des`='$u_ctg_des',`ctg_status`= $u_ctg_status WHERE ctg_id =  $u_ctg_id";
        if (mysqli_query($this->connection, $query)) {
            return "{$u_ctg_name} Catagory Update successfully";
        }
    }

    function add_product($data)
    {
        $pdt_name = $data['pdt_name'];
        $pdt_price = $data['pdt_price'];
        $pdt_des = $data['pdt_des'];
        $pdt_stock = $data['pdt_stock'];
        $pdt_ctg = $data['pdt_ctg'];
        $pdt_status = $data['pdt_status'];
        $pdt_img_name = $_FILES['pdt_img']['name'];
        $pdt_img_size = $_FILES['pdt_img']['size'];
        $pdt_img_tmp = $_FILES['pdt_img']['tmp_name'];
        $img_ext = pathinfo($pdt_img_name, PATHINFO_EXTENSION);

        list($width, $height) = getimagesize("$pdt_img_tmp");

        if ($img_ext == "jpg" ||  $img_ext == 'jpeg' || $img_ext == "png") {
            if ($pdt_img_size <= 2e+6) {
                
                if($width<271 && $height<271){
                    $query = "INSERT INTO `products`( `pdt_name`, `pdt_price`, `pdt_des`,`product_stock`, `pdt_ctg`, `pdt_img`, `pdt_status`) VALUES ('$pdt_name',$pdt_price,'$pdt_des',$pdt_stock,$pdt_ctg,'$pdt_img_name',$pdt_status)";


                    if (mysqli_query($this->connection, $query)) {
                        move_uploaded_file($pdt_img_tmp, "uploads/".$pdt_img_name);
                        $msg = "Product uploaded successfully";
                        return $msg;
                    }
                }else{
                    $msg = "Sorry !! Pdt image max height: 271 px and width: 271 px, but you are trying {$width} px and {$height} px";
                    return $msg;
                }


            } else {
                $msg = "File size should not be large 2MB";
                return $msg;
            }
        } else {
            $msg = "File shoul be jpg or png formate";
            return $msg;
        }
    }

    function display_product()
    {
        $query = "SELECT * FROM `product_info_ctg`";

        if (mysqli_query($this->connection, $query)) {
            $pdt_info = mysqli_query($this->connection, $query);
            return $pdt_info;
        }
    }



    function delete_product($id)
    {
        $sel_query = "SELECT * FROM `products` WHERE pdt_id=$id";
        $query = mysqli_query($this->connection, $sel_query);
        $fetch = mysqli_fetch_assoc($query);
        $pdt_name = $fetch['pdt_name'];
        $img_name = $fetch['pdt_img'];

        $del_query = "DELETE FROM `products` WHERE pdt_id=$id";
        if (mysqli_query($this->connection, $del_query)) {
            unlink('uploads/' . $img_name);
            return "{$pdt_name} delete successfylly";
        }
    }

    function published_product($id)
    {
        $query = "UPDATE `products` SET `pdt_status`='1' WHERE pdt_id=$id";
        if (mysqli_query($this->connection, $query)) {
            
            return "Published Successfully";
            
        }
    }

    function unpublished_product($id)
    {
        $query = "UPDATE `products` SET `pdt_status`='0' WHERE pdt_id=$id";
        if (mysqli_query($this->connection, $query)) {
            
            return "Unpublished Successfully";
            
        }
    }

    function edit_product($id)
    {
        $query = "SELECT * FROM `products` WHERE pdt_id=$id";
        if (mysqli_query($this->connection, $query)) {
            $pdt_info = mysqli_query($this->connection, $query);
            return $pdt_info;
        }
    }

    function update_product($data)
    {
        $pdt_id = $data['pdt_id'];
        $pdt_name = $data['u_pdt_name'];
        $pdt_price = $data['u_pdt_price'];
        $pdt_des = $data['u_pdt_des'];
        $pdt_ctg = $data['u_pdt_ctg'];
        $pdt_stock = $data['pdt_stock'];
        $pdt_status = $data['u_pdt_status'];
        $pdt_img_name = $_FILES['u_pdt_img']['name'];
        $pdt_img_size = $_FILES['u_pdt_img']['size'];
        $pdt_img_tmp = $_FILES['u_pdt_img']['tmp_name'];
        $img_ext = pathinfo($pdt_img_name, PATHINFO_EXTENSION);

        list($width, $height) = getimagesize("$pdt_img_tmp");

        if ($img_ext == "jpg" ||  $img_ext == 'jpeg' || $img_ext == "png") {
            if ($pdt_img_size <= 2e+6) {
               
                if($width<271 && $height<271){

                    $select_query = "SELECT * FROM `products` WHERE pdt_id=$pdt_id";
                    $result = mysqli_query($this->connection, $select_query);
                    $row = mysqli_fetch_assoc($result);
                    $pre_img = $row['pdt_img'];
                    unlink("uploads/".$pre_img);


                    $query = "UPDATE `products` SET `pdt_name`=' $pdt_name',`pdt_price`='$pdt_price',`pdt_des`='$pdt_des',`pdt_ctg`='$pdt_ctg',`pdt_img`='$pdt_img_name',`product_stock`=$pdt_stock,`pdt_status`=$pdt_status WHERE pdt_id=$pdt_id";


                    if (mysqli_query($this->connection, $query)) {

                        move_uploaded_file($pdt_img_tmp, "uploads/".$pdt_img_name);
                        $msg = "Product Updated successfully";
                        return $msg;
                    }
                }else{
                    $msg = "Sorry !! Pdt image max height: 271 px and width: 271 px, but you are trying {$width} px and {$height} px";
                    return $msg;
                }


            } else {
                $msg = "File size should not be large 2MB";
                return $msg;
            }
        } else {
            $msg = "File shoul be jpg or png formate";
            return $msg;
        }
    }

    function display_product_byCata($cataId)
    {
        $query = "SELECT * FROM `product_info_ctg` WHERE ctg_id=$cataId AND pdt_status=1 AND `product_stock`>0";
        if (mysqli_query($this->connection, $query)) {
            $pdt_info = mysqli_query($this->connection, $query);
            return $pdt_info;
        }
    }

    function display_product_byId($pdtId)
    {
        $query = "SELECT * FROM `product_info_ctg` WHERE pdt_id=$pdtId";
        if (mysqli_query($this->connection, $query)) {
            $pdt_info = mysqli_query($this->connection, $query);
            return $pdt_info;
        }
    }

    function related_product($cataID)
    {
        $query = "SELECT * FROM `product_info_ctg` WHERE ctg_id=$cataID ORDER BY pdt_id DESC LIMIT 6";
        if (mysqli_query($this->connection, $query)) {
            $pdt_info = mysqli_query($this->connection, $query);
            return $pdt_info;
        }
    }

    function ctg_by_id($cataID)
    {
        $query = "SELECT * FROM `product_info_ctg` WHERE ctg_id=$cataID";
        if (mysqli_query($this->connection, $query)) {
            $pdt_info = mysqli_query($this->connection, $query);
            $pdt_fetch = mysqli_fetch_assoc($pdt_info);
            return $pdt_fetch;
        }
    }

    function user_register($data)
    {
        $username = $data['username'];
        $user_firstname = $data['user_firstname'];
        $user_lastname = $data['user_lastname'];
        $user_email = $data['user_email'];
        $user_password = md5($data['user_password']);
        $user_mobile = $data['user_mobile'];
        $user_address = $data['user_address'];
        $user_roles = $data['user_roles'];


        $user_check = "SELECT * FROM `users` WHERE user_name='$username' or user_email='$user_email'";

        $mysqli_result = mysqli_query($this->connection, $user_check);

        $row = mysqli_num_rows($mysqli_result);

        if ($row == 1) {
            $msg = "Username or email already exist";
            return $msg;
        } else {
            $query = "INSERT INTO `users`( `user_name`, `user_firstname`, `user_lastname`, `user_email`, `user_password`, `user_mobile`,`user_address`, `user_roles`) VALUES ('$username',' $user_firstname',' $user_lastname','$user_email','$user_password',$user_mobile,'$user_address',$user_roles)";

            if (mysqli_query($this->connection, $query)) {
                $msg = "Your registration done";
                return $msg;
            }
        }
    }


    function user_login($data)
    {
        $user_email = $_POST['user_email'];
        $user_password = md5($_POST['user_password']);

        $query = "SELECT * FROM `users` WHERE `user_email`='$user_email' AND `user_password`='$user_password'";

        if (mysqli_query($this->connection, $query)) {
            $result = mysqli_query($this->connection, $query);
            $user_info = mysqli_fetch_array($result);
            if ($user_info) {
                header("location:userprofile.php");
                session_start();
                $_SESSION['user_id'] = $user_info['user_id'];
                $_SESSION['email'] = $user_info['user_email'];
                $_SESSION['mobile'] = $user_info['user_mobile'];
                $_SESSION['address'] = $user_info['user_address'];

                $_SESSION['username'] = $user_info['user_name'];
            } else {
                $logmsg = "Your username or password is incorrect";
                return $logmsg;
            }
        }
    }

    function user_logout()
    {
        unset($_SESSION['user_id']);
        unset($_SESSION['email']);
        unset($_SESSION['password']);

        header("location:user_login.php");
        session_destroy();
    }

    function view_all_product()
    {
        $query = "SELECT * FROM `product_info_ctg` WHERE `product_stock`>1 ";

        if (mysqli_query($this->connection, $query)) {
            $pdt_info = mysqli_query($this->connection, $query);
            return $pdt_info;
        }
    }

    function display_five_catagory()
    {
        $query = "SELECT * FROM `catagory` LIMIT 5";
        if (mysqli_query($this->connection, $query)) {
            $catagories = mysqli_query($this->connection, $query);
            return $catagories;
        }
    }

    function display_five_products($ctg_id)
    {
        $query = "SELECT * FROM `product_info_ctg` WHERE `ctg_id`=$ctg_id LIMIT 8";

        if (mysqli_query($this->connection, $query)) {
            $eight_product = mysqli_query($this->connection, $query);
            return $eight_product;
        }
    }

    function display_top_rated_pdt()
    {
        $query = "SELECT * FROM `product_info_ctg` WHERE `pdt_price`>200  ORDER BY `pdt_price` LIMIT 12";

        if (mysqli_query($this->connection, $query)) {
            $top_rated = mysqli_query($this->connection, $query);
            return $top_rated;
        }
    }

    function search_product($keyword)
    {
        $query = "SELECT * FROM `product_info_ctg` WHERE `pdt_name` LIKE '%$keyword%'";

        if (mysqli_query($this->connection, $query)) {
            $search_query = mysqli_query($this->connection, $query);
            return $search_query;
        }
    }

    function place_order($data)
    {
        $user_id = $data['user_id'];
        $product_name = $data['product_name'];
        $product_item = $data['product_item'];
        $quantity = $data['quan'];
        $amount = $data['amount'];
        $order_status = $data['order_status'];
        $trans_id = $data['txid'];
        $mobile = $data['shipping_Mobile'];

        $shiping = $data['shiping'];


        $query = "INSERT INTO `order_details`(`user_id`, `product_name`, `product_item`, `amount`, `order_status`, `trans_id`,`Shipping_mobile`, `shiping`, `order_time`, `order_date`) VALUES ( $user_id,'$product_name',$product_item, $amount, $order_status,'$trans_id',$mobile,'$shiping',NOW(), CURDATE())";

        if (mysqli_query($this->connection, $query)) {

            unset($_SESSION['cart']);
            header("location:exist_order.php");
        }
    }

    function confirm_order($post, $session){
        $user_id = $post['user_id'];
        $order_status = $post['order_status'];
        $trans_id = $post['txid'];
        $mobile = $post['shipping_Mobile'];
        $shiping = $post['shiping'];
        $coupon = $_POST['coupon'];

        foreach($session as $key){
            $pdt_name = $key['pdt_name'];
            $pdt_price= $key['pdt_price'];
            $pdt_id= $key['pdt_id'];
            $pdt_quantity=$key['quantity'];

           $query= "INSERT INTO `order_details`(`user_id`, `product_name`,`pdt_quantity`, `amount`,`uses_coupon`, `order_status`, `trans_id`, `Shipping_mobile`, `shiping`, `order_time`) VALUES ($user_id,'$pdt_name',$pdt_quantity, $pdt_price,'$coupon', $order_status,'$trans_id','$mobile','$shiping',NOW())";
           $result= mysqli_query($this->connection, $query);
           unset($_SESSION['cart']);
            header("location:exist_order.php");
           

        }

    }

    function order_details_by_id($user_id)
    {
        $query = "SELECT * FROM `order_details` WHERE `user_id`=$user_id ORDER BY `order_time` DESC";
        if (mysqli_query($this->connection, $query)) {
            $order_query = mysqli_query($this->connection, $query);
            return $order_query;
        }
    }

    function all_order_info()
    {
        $query = "SELECT * FROM `all_order_info` ORDER BY `order_time` DESC";

        if (mysqli_query($this->connection, $query)) {
            $all_order_info = mysqli_query($this->connection, $query);
            return $all_order_info;
        }
    }

    function updat_order_status($data)
    {
        $u_pdt_id = $data['order_id'];
        $u_pdt_status = $data['update_status'];
        $query = "UPDATE `order_details` SET `order_status`=  $u_pdt_status WHERE `order_id`= $u_pdt_id";
        if (mysqli_query($this->connection, $query)) {
            $status_msg = "Order Status updated successfully";
            return $status_msg;
        }
    }

    function user_password_recover($recover_email)
    {
        $query = "SELECT * FROM `users` WHERE `user_email`='$recover_email'";
        if (mysqli_query($this->connection, $query)) {
            $row =  mysqli_query($this->connection, $query);
            return $row;
        }
    }

    function update_user_password($data)
    {

        $update_id = $data['update_user_id'];
        $update_password = md5($data['update_user_password']);

        // echo $update_id.$update_password;

        $query = "UPDATE `users` SET `user_password`='$update_password' WHERE `user_id`=$update_id";


        if (mysqli_query($this->connection, $query)) {
            $update_mag = "You password updated successfull";
            return $update_mag;
        } else {
            return "Please enter a correct email";
        }
    }


    function display_links()
    {
        $query = "SELECT * FROM header_info";

        if (mysqli_query($this->connection, $query)) {
            $ctg_info = mysqli_query($this->connection, $query);
            return $ctg_info;
        }
    }

    function display_link_ID($id)
    {
        $query = "SELECT * FROM header_info WHERE id = $id";

        if (mysqli_query($this->connection, $query)) {
            $cata_info = mysqli_query($this->connection, $query);
            return mysqli_fetch_assoc($cata_info);
        }
    }

    //Mynul created 

    function updata_links($data)
    {
        $link_id = $data['id'];
        $link_email = $data['email'];
        $link_tweeter = $data['tweeter'];
        $link_fb = $data['fb'];
        $link_pin = $data['pin'];
        $link_phone = $data['phone'];


        $query = "UPDATE header_info SET email='$link_email',tweeter='$link_tweeter',fb_link= '$link_fb', pinterest='$link_pin', phone='$link_phone' WHERE id = $link_id";
        if (mysqli_query($this->connection, $query)) {
            return "Link Update successfully";
        }
    }

    function display_logo()
    {
        $query = "SELECT * FROM add_logo";

        if (mysqli_query($this->connection, $query)) {
            $pdt_info = mysqli_query($this->connection, $query);
            return $pdt_info;
        }
    }



    function display_logo_ID($id)
    {
        $query = "SELECT * FROM add_logo WHERE id = $id";

        if (mysqli_query($this->connection, $query)) {
            $cata_info = mysqli_query($this->connection, $query);
            return mysqli_fetch_assoc($cata_info);
        }
    }

    function update_logo($data){
        $lg_id = $data['id'];

        $lg_name = $_FILES['img']['name'];
        $lg_size = $_FILES['img']['size'];
        $lg_tmp = $_FILES['img']['tmp_name'];
        $lg_ext = pathinfo($lg_name, PATHINFO_EXTENSION);

        list($width, $height) = getimagesize("$lg_tmp");


        if ($lg_ext == "jpg" ||   $lg_ext == 'jpeg' ||  $lg_ext == "png") {
            if ($lg_size <= 2e+6) {

                if ($width < 136 && $height < 37) {

                    $select_query = "SELECT * FROM `add_logo` WHERE id=$lg_id";
                    $result = mysqli_query($this->connection, $select_query);
                    $row = mysqli_fetch_assoc($result);
                    $pre_img = $row['img'];
                    unlink("uploads/".$pre_img);


                    $query = "UPDATE add_logo SET img='$lg_name' WHERE id=$lg_id";

                    if (mysqli_query($this->connection, $query)) {
                        move_uploaded_file($lg_tmp, "uploads/" . $lg_name);
                        $msg = "Logo  Updated successfully";
                        return $msg;
                    }
                }else{
                    $msg = "Sorry !! Logo max height: 135px and width:36px, but you are trying {$width} px and {$height} px";
                    return $msg;
                }
            } else {
                $msg = "File size should not be large 2MB";
                return $msg;
            }
        } else {
            $msg = "File shoul be jpg or png formate";
            return $msg;
        }
    }

    function SlideShow(){
        $query = "SELECT * FROM `slider`";
        if(mysqli_query($this->connection, $query)){
            $row = mysqli_query($this->connection, $query);
            return $row;
        }
    }

    
    function slide_By_id($id){
        $query = "SELECT * FROM `slider` WHERE `slider_id`=$id";
        if(mysqli_query($this->connection, $query)){
            $row = mysqli_query($this->connection, $query);
            return $row;
        }
    }

    function slider_update($data){
        $slide_id = $data['slider_id'];
        $first_line = $data['first_line'];
        $second_line = $data['second_line'];
        $third_line = $data['third_line'];
        $btn_left = $data['btn_left'];
        $btn_right = $data['btn_right'];
        
        $lg_name = $_FILES['slider_img']['name'];
        $lg_size = $_FILES['slider_img']['size'];
        $lg_tmp = $_FILES['slider_img']['tmp_name'];
        $lg_ext = pathinfo($lg_name, PATHINFO_EXTENSION);

        list($width, $height) = getimagesize("$lg_tmp");


        if ($lg_ext == "jpg" ||   $lg_ext == 'jpeg' ||  $lg_ext == "png") {
            if ($lg_size <= 2e+6) {

                if ($width == 1920 && $height == 550) {

                    $select_query = "SELECT * FROM `slider` WHERE `slider_id`=$slide_id";
                    $result = mysqli_query($this->connection, $select_query);
                    $row = mysqli_fetch_assoc($result);
                    $pre_img = $row['img'];
                    unlink("uploads/".$pre_img);


                    $query = "UPDATE `slider` SET `first_line`='$first_line',`second_line`='$second_line',`third_line`='$third_line',`btn_left`='$btn_left',`btn_right`='$btn_right',`slider_img`='$lg_name ' WHERE `slider_id`=$slide_id";

                    if (mysqli_query($this->connection, $query)) {
                        move_uploaded_file($lg_tmp, "uploads/" . $lg_name);
                        $msg = "Slider  Updated successfully";
                        return $msg;
                    }
                }else{
                    $msg = "Slider image must be Width: 1920px and height: 550px, but you are trying {$width} px and {$height} px";
                    return $msg;
                }
            } else {
                $msg = "File size should not be large 2MB";
                return $msg;
            }
        } else {
            $msg = "File shoul be jpg or png formate";
            return $msg;
        }
    }


    function post_comment($data){
        $user_id = $data['user_id'];
        $user_name = $data['user_name'];
        $pdt_id = $data['pdt_id'];
        $user_comment =  $data['comment'];

        $query = "INSERT INTO `customer_feedback`(`user_id`, `user_name`, `pdt_id`, `comment`, `comment_date`) VALUES ($user_id,'$user_name',$pdt_id,'$user_comment',CURDATE())";
        
        if(mysqli_query($this->connection, $query)){
            $msg = "Thanks for your valuable feedback";
            return $msg;
        }
    }

    function view_comment_id($id){
        $query = "SELECT * FROM `customer_feedback` WHERE `pdt_id`=$id";
        if(mysqli_query($this->connection, $query)){
            $result = mysqli_query($this->connection, $query);

            if(mysqli_num_rows($result)>0){
                return $result;
            }
            
        }
    }

    function view_comment_all(){
        $query = "SELECT * FROM `customer_feedback`";
        if(mysqli_query($this->connection, $query)){
            $result = mysqli_query($this->connection, $query);

           return $result;
            
        }
    }

    function edit_comment($cmt_id){
        $query = "SELECT * FROM `customer_feedback` WHERE `id` = $cmt_id";

        if(mysqli_query($this->connection, $query)){
            $array = mysqli_query($this->connection, $query);
            return $array;
        }
    }
    function update_comment($data){
        $cmt_id = $data['cmt_id'];
        $comment = $data['u_comment'];
        $query = "UPDATE `customer_feedback` SET `comment`='$comment' WHERE `id`=$cmt_id";
        if(mysqli_query($this->connection, $query)){
            $updata_msg = "Comment updated successfully";
            return $updata_msg;
        }
    }

    function delete_comment($cmt_id){
        $query = "DELETE FROM `customer_feedback` WHERE `id`=$cmt_id";

        if(mysqli_query($this->connection, $query)){
            $del_msg = "Comment deleted successfully";
            return $del_msg;
        }
    }

    function add_coupon($data){
        $coupon_code = $data['cuopon_code'];
        $coupon_description = $data['cuopon_description'];
        $coupon_discount = $data['cuopon_discount'];
        $coupon_status = $data['cuopon_status'];


        $query = "INSERT INTO `cupon`( `cupon_code`, `description`, `discount`, `status`) VALUES ('$coupon_code','$coupon_description',$coupon_discount,$coupon_status)";

        if(mysqli_query($this->connection, $query)){

            
            $add_msg = "Coupon added successfully";
            return $add_msg;
        }
    }

    function show_coupon(){
        $query = "SELECT * FROM `cupon`";
        if(mysqli_query($this->connection, $query)){
            $result = mysqli_query($this->connection, $query);
            return $result;
        }
    }
}
