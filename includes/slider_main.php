<div class="main-slide block-slider nav-change">
                <ul class="biolife-carousel" data-slick='{"arrows": true, "dots": false, "slidesMargin": 0, "slidesToShow": 1, "infinite": false, "speed": 800}' >
                   
                <?php 
                    $obj = new adminback();

                   $rows =  $obj->SlideShow();

                   while ($row = mysqli_fetch_assoc($rows)){
                       
                  
                ?>
                
                <li>
                        <div class="slide-contain slider-opt03__layout02 slide_animation type_02">
                            <div class="media background-geen-01" style="background-image: url('admin/uploads/<?php echo $row["slider_img"]?>');"></div>
                            <div class="text-content">
                                <i class="first-line"><?php echo $row['first_line']; ?></i>
                                <h3 class="second-line"> <?php echo $row['second_line']; ?> </h3>
                                <p class="third-line"><?php echo $row['third_line']; ?></p>
                                <p class="buttons">
                                    <a href="./all_product.php" class="btn btn-bold"><?php echo $row['btn_left']; ?></a>
                                    <a href="#" class="btn btn-thin"><?php echo $row['btn_right']; ?></a>
                                </p>
                            </div>
                        </div>
                    </li>

                    

                    <?php 
                         }
                    ?>
                  
                 
                     <li>
                        <div class="slide-contain slider-opt03__layout02 slide_animation type_02">
                            <div class="media background-geen-02"></div>
                            <div class="text-content">
                                <i class="first-line">Pomegranate</i>
                                <h3 class="second-line">Vegetables 100% Organic</h3>
                                <p class="third-line">A blend of freshly squeezed green apple & fruits</p>
                                <p class="buttons">
                                    <a href="./all_product.php" class="btn btn-bold">Shop now</a>
                                    <a href="#" class="btn btn-thin">View lookbook</a>
                                </p>
                            </div>
                        </div>
                    </li>
                
                </ul>
            </div>