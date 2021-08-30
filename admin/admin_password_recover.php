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

    if (isset($_POST['admin_recover'])) {
        $recover_email = $_POST['recover_email'];
        $rec_row = $obj->admin_password_recover($recover_email);
    
        $num_row = mysqli_num_rows($rec_row);
        $rec_msg = "";
    
        if ($num_row > 0) {
            $rec_result = mysqli_fetch_assoc($rec_row);
    
           
            $rec_email = $rec_result['admin_email'];
            $rec_pass = $rec_result['admin_pass'];
    
            $to_email = $rec_email;
            $subject = "Password Recovery from Fruits Bazar";
            $body = "Dear".PHP_EOL."This is your password: {$rec_pass}".PHP_EOL. "Please visit this link: https://10015.io/tools/md5-encrypt-decrypt ".PHP_EOL."Then decrypt the password".PHP_EOL. "Thank you";
            $headers = "From: graphicsapon@gmail.com";
    
            if (mail($to_email, $subject, $body, $headers)) {
                $rec_msg= "Email successfully sent to $to_email...";
               
            } else {
                $rec_msg = "Email sending failed...";
            }
    
    
        } else {
            $rec_msg = "Sorry !!! you have no account";
        }
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
                                        <h3 class="text-left txt-primary">Recover Password</h3>

                                        <p style="color: Black;">
                                            <?php 
                                                if(isset($rec_msg)){
                                                    echo $rec_msg;
                                                }
                                            ?>
                                        </p>
                                    </div>
                                </div>
                                <hr/> <br>
                                <div class="input-group">
                                    <input type="email" class="form-control" placeholder="Your Email Address" name="recover_email">
                                    <span class="md-line"></span>
                                </div>

                               
                                
                                <div class="row m-t-30">
                                    <div class="col-md-12">
                                        <input type="submit" name="admin_recover" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20" value="Recover Passsowrd">
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

