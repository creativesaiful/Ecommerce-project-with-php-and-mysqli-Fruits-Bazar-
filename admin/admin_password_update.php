<?php 
    include("class/adminback.php");
    $obj= new adminback();

    if(isset($_POST['admin_btn'])){
        $obj->admin_login($_POST);
    }
    session_start();
    if(isset($_SESSION['admin_id'])){
        header("location:dashboard.php");
    }

    if(isset($_GET['status'])){
        if($_GET['status']=="update"){
            $u_admin_id = $_GET['id'];
        }
    }

    if(isset($_POST['u_admin_btn'])){
       $update_msg =  $obj->update_admin_password($_POST);
    }

?>

<?php 
    include ("includes/head.php")
?>

  <body>

  <section class="login p-fixed d-flex text-center bg-primary common-img-bg">
        <!-- Container-fluid starts -->
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <!-- Authentication card start -->
                    <div class="login-card card-block auth-body mr-auto ml-auto">
                        <form action="" method="post" class="md-float-material">
                            <div class="text-center">
                              
                            </div>
                            <div class="auth-box">
                                <div class="row m-b-20">
                                    <div class="col-md-12">
                                        <h3 class="text-left txt-primary">Update Password</h3>

                                        <p style="color: Black; " class="text-left">
                                            <?php 
                                                if(isset($update_msg)){
                                                    echo $update_msg;
                                                }
                                            ?>
                                        </p>
                                    </div>
                                </div>
                                <hr/> <br>
                                <div class="input-group">
                                    <input type="password" class="form-control" placeholder="New password" name="admin_update_password" required>
                                    <span class="md-line"></span>
                                </div>

                               
                                 <input type="hidden" value="<?php echo $u_admin_id ?>" name="admin_update_id">
                                <div class="row m-t-30">
                                    <div class="col-md-12">
                                        <input type="submit" name="u_admin_btn" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20" value="Recover Passsowrd">
                                    </div>
                                </div>

                                <div class="row m-t-10">
                                    <div class="col-md-12">
                                        <a href="index.php" class="btn btn-success btn-md waves-effect text-center m-b-20">Go to Sign In</a>
                                       
                                    </div>
                                </div>
                                <hr/>
                     

                            </div>
                        </form>
                        <!-- end of form -->
                    </div>
                    <!-- Authentication card end -->
                </div>
                <!-- end of col-sm-12 -->
            </div>
            <!-- end of row -->
        </div>
        <!-- end of container-fluid -->
    </section>
	

  

<?php 
    include ("includes/script.php")
?>

