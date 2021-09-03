<?php 
    if(isset($_GET['status'])){
        if($_GET['status']=='edit'){
            $id = $_GET['id'];
           $logo =$obj->display_logo_ID($id);
        }
    }

    if(isset($_POST['update_logo'])){
        $up_msg = $obj->update_logo($_POST);
    }
?>


<h2>Update Logo</h2>

<h6 class="">
    <?php if(isset($up_msg)){ echo $up_msg;} ?>
</h6>

</h4>
<form action=""  enctype="multipart/form-data"  method="post">


    <div class="form-group">
        <label for="img">Image</label>
        <input type="file" name="img" class="form-control">
       
    <input type="hidden" name="id" value="<?php echo $logo['id'] ?>" >


    <input type="submit" value="Update Logo" name="update_logo" class="btn btn-primary" >

</form>