<?php
 $rows = $obj->SlideShow();
        
?>

<h2>Manage Slider</h2>

<table class="table">
    <thead>
        <tr>
            <th>Slider Id</th>
            <th>First line</th>
            <th>Second Line</th>
            <th>Third Line</th>
            <th>Button Left</th>
            <th>Button Right</th>
            <th>Slide Image</th>
            <th>Action</th>
        </tr>
    </thead>

    <tbody>

    <?php 
        while($row = mysqli_fetch_assoc($rows)){
    ?>
    
        <tr>
            <td> <?php echo $row['slider_id'] ?></td>
        

      
            <td> <?php echo $row['first_line'] ?></td>
    
            <td> <?php echo $row['second_line'] ?></td>
     
            <td> <?php echo $row['third_line'] ?></td>
       
            <td> <?php echo $row['btn_left'] ?></td>
        
            <td> <?php echo $row['btn_right'] ?></td>
      
            <td> <img src="uploads/<?php echo $row['slider_img'] ?>" width="200px"> </td>

            <td>
                <a href="edit_slider.php?status=edit&&id=<?php echo $row['slider_id'] ?>">Edit</a>
            </td>
        </tr>

        <?php } ?>
    </tbody>
</table>