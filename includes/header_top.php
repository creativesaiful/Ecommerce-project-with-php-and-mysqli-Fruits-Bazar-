

<div class="header-top bg-main hidden-xs">
            <div class="container">
                <div class="top-bar left">
                    <ul class="horizontal-menu">
                        <li><a href="#"><i class="fa fa-envelope" aria-hidden="true"></i>Organic@company.com</a></li>
                        <li><a href="#">Free Shipping</a></li>
                    </ul>
                </div>
                <div class="top-bar right">
                    <ul class="social-list">
                        <li><a href="https://www.facebook.com/"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.twitter.com/"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.pinterest.com/"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
                    </ul>
                    <ul class="horizontal-menu">

                        <li><a href="user_login.php" class="login-link"><i class="biolife-icon icon-login"></i>
                        <?php 
                        if(isset($_SESSION['username'])){
                            echo $_SESSION['username'];
                        }else{
                            echo "Login";
                        }
                        ?>
                        </a></li>

                       
                    </ul>
                </div>
            </div>
        </div>