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
            } else {
                echo "Email or password wrong";
            }
        }
    }

    function admin_logout(){
        unset ( $_SESSION['admin_id']);
        unset ($_SESSION['admin_email']);
        header("location:index.php");
        session_destroy();

    }

    function add_catagory($data){
        $ctg_name = $data['ctg_name'];
        $ctg_des = $data['ctg_des'];
        $ctg_status = $data['ctg_status'];

        $query = "INSERT INTO `catagory`( `ctg_name`, `ctg_des`, `ctg_status`) VALUES ('$ctg_name','$ctg_des', $ctg_status)";

        if(mysqli_query($this->connection, $query)){
            return "{$ctg_name} added as a catagory successfully!!";
        }else{
            return "Failed to add catagory";
        }
    }

     function display_catagory(){
        $query = "SELECT * FROM `catagory`";

        if(mysqli_query($this->connection, $query)){
            $ctg_info = mysqli_query($this->connection, $query);
            return $ctg_info;
        }
    }

    function p_display_catagory(){
        $query = "SELECT * FROM `catagory` WHERE ctg_status=1";

        if(mysqli_query($this->connection, $query)){
            $ctg_info = mysqli_query($this->connection, $query);
            return $ctg_info;
        }
    }

    function catagory_published($id){
        $query = "UPDATE `catagory` SET `ctg_status`= 1 WHERE ctg_id = $id";
        mysqli_query($this->connection, $query);
    }
    function catagory_unpublished($id){
        $query = "UPDATE `catagory` SET `ctg_status`= 0 WHERE ctg_id = $id";
        mysqli_query($this->connection, $query);
    }

    function delete_catagory($id){
        $query = "DELETE FROM `catagory` WHERE  ctg_id = $id";
        mysqli_query($this->connection, $query);
    }

    function display_cataByID($id){
        $query = "SELECT * FROM `catagory` WHERE ctg_id = $id";

        if(mysqli_query($this->connection, $query)){
            $cata_info = mysqli_query($this->connection, $query);
            return mysqli_fetch_assoc($cata_info);
        }
    }

    function updata_catagory($data){
        $u_ctg_id = $data['u_ctg_id'];
        $u_ctg_name = $data['u_ctg_name'];
        $u_ctg_des = $data['u_ctg_des'];
        $u_ctg_status = $data['u_ctg_status'];

        $query = "UPDATE `catagory` SET `ctg_name`='$u_ctg_name',`ctg_des`='$u_ctg_des',`ctg_status`= $u_ctg_status WHERE ctg_id =  $u_ctg_id";
        if(mysqli_query($this->connection, $query)){
            return "{$u_ctg_name} Catagory Update successfully";
        }

    }

    function add_product($data){
        $pdt_name = $data['pdt_name'];
        $pdt_price = $data['pdt_price'];
        $pdt_des = $data['pdt_des'];
        $pdt_ctg = $data['pdt_ctg'];
        $pdt_status = $data['pdt_status'];
        $pdt_img_name = $_FILES['pdt_img']['name'];
        $pdt_img_size = $_FILES['pdt_img']['size'];
        $pdt_img_tmp = $_FILES['pdt_img']['tmp_name'];
        $img_ext = pathinfo($pdt_img_name, PATHINFO_EXTENSION);
        
        if($img_ext=="jpg" ||  $img_ext=='jpeg' || $img_ext == "png"){
            if($pdt_img_size<=2e+6){
                $query = "INSERT INTO `products`( `pdt_name`, `pdt_price`, `pdt_des`, `pdt_ctg`, `pdt_img`, `pdt_status`) VALUES ('$pdt_name',$pdt_price,'$pdt_des',$pdt_ctg,'$pdt_img_name',$pdt_status)";


                    if(mysqli_query($this->connection, $query)){
                        move_uploaded_file($pdt_img_tmp, "uploads/".$pdt_img_name);
                        $msg = "Product uploaded successfully";
                        return $msg;
                        
                    }
            }else{
                $msg = "File size should not be large 2MB";
                return $msg;
            }
        }else{
            $msg = "File shoul be jpg or png formate";
            return $msg;
        }
    }

    function display_product(){
        $query = "SELECT * FROM `product_info_ctg`";

        if(mysqli_query($this->connection,$query)){
            $pdt_info = mysqli_query($this->connection,$query);
            return $pdt_info;
        }
    }

 

    function delete_product($id){
        $sel_query = "SELECT * FROM `products` WHERE pdt_id=$id";
        $query = mysqli_query($this->connection, $sel_query);
        $fetch = mysqli_fetch_assoc($query);
        $pdt_name = $fetch['pdt_name'];
        $img_name = $fetch['pdt_img'];

        $del_query = "DELETE FROM `products` WHERE pdt_id=$id";
        if(mysqli_query($this->connection, $del_query)){
            unlink('uploads/'.$img_name);
            return "{$pdt_name} delete successfylly";
        }
    }

    function published_product($id){
        $query = "UPDATE `products` SET `pdt_status`='1' WHERE pdt_id=$id";
        if(mysqli_query($this->connection, $query)){
            return "Published Successfully";
        }
    }

    function unpublished_product($id){
        $query = "UPDATE `products` SET `pdt_status`='0' WHERE pdt_id=$id";
        if(mysqli_query($this->connection, $query)){
            return "Unpublished Successfully";
        }
    }

    function edit_product($id){
        $query = "SELECT * FROM `products` WHERE pdt_id=$id";
        if(mysqli_query($this->connection, $query)){
            $pdt_info= mysqli_query($this->connection, $query);
            return $pdt_info;
        }
    }

    function update_product($data){
        $pdt_id = $data['pdt_id'];
        $pdt_name = $data['u_pdt_name'];
        $pdt_price = $data['u_pdt_price'];
        $pdt_des = $data['u_pdt_des'];
        $pdt_ctg = $data['u_pdt_ctg'];
        $pdt_status = $data['u_pdt_status'];
        $pdt_img_name = $_FILES['u_pdt_img']['name'];
        $pdt_img_size = $_FILES['u_pdt_img']['size'];
        $pdt_img_tmp = $_FILES['u_pdt_img']['tmp_name'];
        $img_ext = pathinfo($pdt_img_name, PATHINFO_EXTENSION);
        
        if($img_ext=="jpg" ||  $img_ext=='jpeg' || $img_ext == "png"){
            if($pdt_img_size<=2e+6){
                $query = "UPDATE `products` SET `pdt_name`=' $pdt_name',`pdt_price`='$pdt_price',`pdt_des`='$pdt_des',`pdt_ctg`='$pdt_ctg',`pdt_img`='$pdt_img_name',`pdt_status`=$pdt_status WHERE pdt_id=$pdt_id";


                    if(mysqli_query($this->connection, $query)){
                        move_uploaded_file($pdt_img_tmp, "uploads/".$pdt_img_name);
                        $msg = "Product Updated successfully";
                        return $msg;
                        
                    }
            }else{
                $msg = "File size should not be large 2MB";
                return $msg;
            }
        }else{
            $msg = "File shoul be jpg or png formate";
            return $msg;
        }
    }

    function display_product_byCata($cataId){
        $query = "SELECT * FROM `product_info_ctg` WHERE ctg_id=$cataId AND pdt_status=1";
        if(mysqli_query($this->connection, $query)){
            $pdt_info = mysqli_query($this->connection, $query);
            return $pdt_info;
        }
    }

    function display_product_byId($pdtId){
        $query = "SELECT * FROM `product_info_ctg` WHERE pdt_id=$pdtId";
        if(mysqli_query($this->connection, $query)){
            $pdt_info = mysqli_query($this->connection, $query);
            return $pdt_info;
        }
    }

    function related_product($cataID){
        $query = "SELECT * FROM `product_info_ctg` WHERE ctg_id=$cataID ORDER BY pdt_id DESC LIMIT 6";
        if(mysqli_query($this->connection, $query)){
            $pdt_info = mysqli_query($this->connection, $query);
            return $pdt_info;
        }
    }

    function ctg_by_id($cataID){
        $query = "SELECT * FROM `product_info_ctg` WHERE ctg_id=$cataID";
        if(mysqli_query($this->connection, $query)){
            $pdt_info = mysqli_query($this->connection, $query);
            $pdt_fetch = mysqli_fetch_assoc($pdt_info);
            return $pdt_fetch;
        }
    }

    function user_register($data){
        $username = $data['username'];
        $user_firstname = $data['user_firstname'];
        $user_lastname = $data['user_lastname'];
        $user_email = $data['user_email'];
        $user_password = md5($data['user_password']);
        $user_mobile = $data['user_mobile'];
        $user_roles = $data['user_roles'];


        $user_check = "SELECT * FROM `users` WHERE user_name='$username' or user_email='$user_email'";

        $mysqli_result = mysqli_query($this->connection, $user_check);

        $row = mysqli_num_rows($mysqli_result);

        if($row==1){
            $msg= "Username or email already exist";
            return $msg;
        }else{
            $query = "INSERT INTO `users`( `user_name`, `user_firstname`, `user_lastname`, `user_email`, `user_password`, `user_mobile`, `user_roles`) VALUES ('$username',' $user_firstname',' $user_lastname','$user_email','$user_password',$user_mobile,$user_roles)";

            if(mysqli_query($this->connection, $query)){
                $msg = "Your registration done";
                return $msg;
            }
        }

       
    }


    function user_login($data){
        $user_email = $_POST['user_email'];
        $user_password = md5($_POST['user_password']);

        $query = "SELECT * FROM `users` WHERE `user_email`='$user_email' AND `user_password`='$user_password'";

        if(mysqli_query($this->connection, $query)){
            $result = mysqli_query($this->connection, $query);
            $user_info = mysqli_fetch_array($result);
            if($user_info){
                header("location:userprofile.php");
                session_start();
                $_SESSION['user_id'] =$user_info['user_id'];
                $_SESSION['email'] = $user_info['user_email'];
                
                $_SESSION['username']=$user_info['user_name'];
            }else{
                $logmsg = "Your username or password is incorrect";
                return $logmsg;
            }
        }
        
    }

    function user_logout(){
        unset ($_SESSION['user_id']);
        unset ($_SESSION['email']);
        unset ($_SESSION['password']);
       
        header("location:user_login.php");
        session_destroy();

    }
}
