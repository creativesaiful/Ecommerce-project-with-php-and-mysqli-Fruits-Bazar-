<?php

session_start();
include_once("admin/class/adminback.php");
$obj = new adminback();

$cata_info = $obj->p_display_catagory();
$cataDatas = array();
while ($data = mysqli_fetch_assoc($cata_info)) {
    $cataDatas[] = $data;
}

if (isset($_SESSION['user_id'])) {
    header("location:userprofile.php");
}


if (isset($_POST['u_pass_recover'])) {
    $recover_email = $_POST['recover_email'];
    $rec_row = $obj->user_password_recover($recover_email);

    $num_row = mysqli_num_rows($rec_row);
    $rec_msg = "";

    if ($num_row > 0) {
        $rec_result = mysqli_fetch_assoc($rec_row);

        $rec_name = $rec_result['user_firstname'];
        $rec_email = $rec_result['user_email'];
        $rec_pass = $rec_result['user_password'];

        $to_email = $rec_email;
        $subject = "Recover Password From Fruits Bazar";
        $body = "Dear {$rec_name}".PHP_EOL."This is your password: {$rec_pass}".PHP_EOL. "Please visit this link: https://10015.io/tools/md5-encrypt-decrypt ".PHP_EOL."Then decrypt the password".PHP_EOL. "Thank you";
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
include_once("includes/head.php");
?>

<body class="biolife-body">
    <!-- Preloader -->

    <?php
    include_once("includes/preloader.php");
    ?>

    <!-- HEADER -->
    <header id="header" class="header-area style-01 layout-03">

        <?php
        include_once("includes/header_top.php");
        ?>

        <?php
        include_once("includes/header_middle.php");
        ?>

        <?php
        include_once("includes/header_bottom.php");
        ?>

    </header>

    <!-- Page Contain -->
    <div class="page-contain">

        <!-- Main content -->
        <div id="main-content" class="main-content">


            <div class="container">
                <h2 class="text-center">Password Recovery</h2>

                <h4 class="text-danger"> <?php
                                            if (isset($rec_msg )) {
                                                echo $rec_msg ;
                                            }
                                            ?></h4>
                <div class="row">




                    <?php
                    // $to_email = "saifulislamsapon@gmail.com";
                    // $subject = "Simple Email Test via PHP";
                    // $body = "Hi, This is test email send by PHP Script";
                    // $headers = "From: graphicsapon@gmail.com";

                    // if (mail($to_email, $subject, $body, $headers)) {
                    //     echo "Email successfully sent to $to_email...";
                    // } else {
                    //     echo "Email sending failed...";
                    // }

                    ?>



                    <!--Form Sign In-->
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="signin-container">
                            <form action="" name="frm-login" method="post">
                                <p class="form-row">
                                    <label for="email">Email</label>
                                    <input type="email" id="fid-name" name="recover_email" class="txt-input">
                                </p>

                                <p class="wrap-btn">
                                    <input type="submit" value="Recover Password" name="u_pass_recover" class="btn btn-success">

                                </p>
                            </form>
                        </div>
                    </div>

                    <!--Go to Register form-->
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="register-in-container">
                            <div class="intro">
                                <h4 class="box-title">New Customer?</h4>
                                <p class="sub-title">Create an account with us and you’ll be able to:</p>
                                <ul class="lis">
                                    <li>Check out faster</li>
                                    <li>Save multiple shipping anddesses</li>
                                    <li>Access your order history</li>
                                    <li>Track new orders</li>
                                    <li>Save items to your Wishlist</li>
                                </ul>
                                <a href="user_register.php" class="btn btn-bold">Create an account</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>






        </div>
    </div>

    <!-- FOOTER -->

    <?php
    include_once("includes/footer.php");
    ?>

    <!--Footer For Mobile-->
    <?php
    include_once("includes/mobile_footer.php");
    ?>

    <?php
    include_once("includes/mobile_global.php")
    ?>


    <!-- Scroll Top Button -->
    <a class="btn-scroll-top"><i class="biolife-icon icon-left-arrow"></i></a>

    <?php
    include_once("includes/script.php")
    ?>
</body>

</html>