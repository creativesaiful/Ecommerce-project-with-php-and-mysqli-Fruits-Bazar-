<?php 





    if(isset($_POST['add_user'])){
        $add_msg = $obj->add_admin_user($_POST);
    }
?>

<div class="container">
<h2>Add Admin or Modarator</h2>
<br>
<h6 class="text-success">
    <?php 
        if(isset($add_msg)){
            echo $add_msg;
        }
    ?>
</h6>
<form action="" method="POST">
    <div class="form-group">
        <h4>User Email</h4>
        <input type="email" name="user_name" class="form-control" required>
    </div>

    <div class="form-group">
        <h4>Password</h4>
        <input type="password" name="user_password" class="form-control" required>
    </div>

    <div class="form-group">
        <h4>Role</h4>
       <select name="user_role" class="form-control">
           <option disabled selected>--Select--</option>
           <option value="1">Admin</option>
           <option value="2">Moderator</option>
       </select>
    </div>

    <div class="form-group">
        <input type="submit" name="add_user" class="btn btn-primary">
    </div>
</form>
</div>