<?php
if (isset($_GET['status'])) {
    if ($_GET['status'] == "edit") {
        $slide_id = $_GET['id'];
    }
}

$row = $obj->slide_By_id($slide_id);
$slide = mysqli_fetch_assoc($row);

if (isset($_POST['update_slider_btn'])) {
    $slider_msg =  $obj->slider_update($_POST);
}
?>

<h2>Edit Slider</h2>


<h4>
    <?php
    if (isset($slider_msg)) {
        echo $slider_msg;
    }
    ?>
</h4>

<form action="" method="post" enctype="multipart/form-data">


    <h4>Slider No: <?php echo $slide['slider_id'] ?></h4>

    <input type="hidden" value="<?php echo $slide['slider_id'] ?>" name="slider_id">


    <div class="form-group">
        <label for="first_line">First Line</label>
        <input type="text" name="first_line" class="form-control" value="<?php echo $slide['first_line'] ?>">
    </div>

    <div class="form-group">
        <label for="second_line">Second Line</label>
        <input type="text" name="second_line" class="form-control" value="<?php echo $slide['second_line'] ?>">
    </div>

    <div class="form-group">
        <label for="third_line">Third Line</label>
        <input type="text" name="third_line" class="form-control" value="<?php echo $slide['third_line'] ?>">
    </div>

    <div class="form-group">
        <label for="btn_left">Left Button</label>
        <input type="text" name="btn_left" class="form-control" value="<?php echo $slide['btn_left'] ?>">
    </div>

    <div class="form-group">
        <label for="btn_right">Right Button</label>
        <input type="text" name="btn_right" class="form-control" value="<?php echo $slide['btn_right'] ?>">
    </div>


    <div class="form-group">
        <label for="slider_img">Slider Image <span class="text-warning">(Slider Image must be width:1920px and height: 550px )</span> </label>
        <input type="file" name="slider_img" class="form-control" required>

       
    </div>





    <input type="submit" value="Update Slide" name="update_slider_btn" class="btn btn-primary">

</form>