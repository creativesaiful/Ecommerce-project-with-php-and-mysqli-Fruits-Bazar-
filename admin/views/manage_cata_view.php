
  

<?php 

    $catagories = $obj-> display_catagory();

    if(isset($_GET['status'])){
        $get_id = $_GET['id'];
        if($_GET['status']=="published"){
            $obj->catagory_published($get_id);
        }elseif($_GET['status']=="unpublished"){
            $obj->catagory_unpublished($get_id);
        }elseif($_GET['status']=="delete"){
            $obj->delete_catagory($get_id);
        }
    }
   
    

?>
<div >
    <table class="table table-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th>Catagory Name</th>
                <th>Catagory Descriptiong</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>

        <tbody>
           <?php while($ctg = mysqli_fetch_assoc($catagories)){ ?>
            <tr>
                <td><?php echo $ctg['ctg_id'] ?></td>
                <td><?php echo $ctg['ctg_name'] ?></td>
                <td><?php echo $ctg['ctg_des'] ?></td>
                <td>
                    <?php 
                    if($ctg['ctg_status']==0)
                    {echo "Unpublished";
                    
                         ?> 
                         <a href="?status=published&&id=<?php echo $ctg['ctg_id'] ?>" class="btn btn-sm btn-success">Make Published</a>
                        <?php
                    } 
                    else{echo "Published";
                    
                    ?>
                     <a href="?status=unpublished&&id=<?php echo $ctg['ctg_id'] ?>" class="btn btn-sm btn-warning">Make Unpublished</a>
                        <?php 
                    }  
                    
                    ?>
                
                </td>
                <td>
                    <a href="edit_cata.php?status=edit&&id=<?php echo $ctg['ctg_id'] ?>" class="btn btn-sm btn-warning">Edit</a>
                    <a href="?status=delete&&id=<?php echo $ctg['ctg_id'] ?>" class="btn btn-sm btn-danger">Delete</a>
                </td>
               
            </tr>
            <?php 
                }
            ?>
           
        </tbody>
    </table>
</div>
