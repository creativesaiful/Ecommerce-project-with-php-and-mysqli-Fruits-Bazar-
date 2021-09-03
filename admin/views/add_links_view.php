
  

<?php 

    $catagories = $obj-> display_links();

    // if(isset($_GET['status'])){
    //     $get_id = $_GET['id'];
    //     if($_GET['status']=="published"){
    //         $obj->catagory_published($get_id);
    //     }elseif($_GET['status']=="unpublished"){
    //         $obj->catagory_unpublished($get_id);
    //     }elseif($_GET['status']=="delete"){
    //         $obj->delete_catagory($get_id);
    //     }
    // }
   
    

?>
<div >
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Tweeter</th>
                <th>Facebook</th>
                <th>Pinterest</th>
                <th>Phone</th>
                <th>Action</th>
            </tr>
        </thead>

        <tbody>
           <?php while($ctg = mysqli_fetch_assoc($catagories)){ ?>
            <tr>
                <td><?php echo $ctg['id'] ?></td>
                <td><?php echo $ctg['email'] ?></td>
                <td><?php echo $ctg['tweeter'] ?></td>
                <td><?php echo $ctg['fb_link'] ?></td>
                <td><?php echo $ctg['pinterest'] ?></td>
                <td><?php echo $ctg['phone'] ?></td>
               
                <td>
                    <a href="edit_links.php?status=edit&&id=<?php echo $ctg['id'] ?>" class="btn btn-sm btn-warning">Edit</a>
                  
                </td>
               
            </tr>
            <?php 
                }
            ?>
           
        </tbody>
    </table>
</div>
