<?php 
    if(isset($_GET['status'])){
        $user_id = $_GET['id'];
        if($_GET['status']=="userEdit"){
           $admin_info= $obj->show_admin_user_by_id($user_id);
           $admin = mysqli_fetch_assoc($admin_info);
        }
    }

    if(isset($_POST['update_user'])){
       $update_msg =  $obj->update_admin($_POST);
    }
?>

<div class="container">
    <h4>Edit Admin/Modarator Information</h4>

    <h6>
        <?php 
            if(isset( $update_msg)){
                echo  $update_msg;
            }
        ?>
    </h6>
<form action="" method="POST">
    <div class="form-group">
        <h4>User Email</h4>
        <input type="email" name="u-user-email" class="form-control" value="<?php echo $admin['admin_email'] ?>" required>
    </div>

    <!-- <div class="form-group">
        <h4>Password</h4>
        <input type="password" name="user_password" class="form-control" required>
    </div> -->

    <input type="hidden" name="user_id" value="<?php echo $admin['admin_id'] ?>">

    <div class="form-group">
        <h4>Role</h4>
       <select name="u_user_role" class="form-control">
           <!-- <option disabled selected>--Select--</option> -->
           
           <option value="1" <?php  if($admin['role']==1){echo "Selected";  } ?> >Admin</option>
           <option value="2" <?php  if($admin['role']==2){echo "Selected";  } ?> >Moderator</option>
       </select>
    </div>

    <div class="form-group">
        <input type="submit" name="update_user" class="btn btn-primary">
    </div>
</form>
</div>