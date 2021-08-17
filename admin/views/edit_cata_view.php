
<?php 
    if(isset($_GET['status'])){
        if($_GET['status']=='edit'){
            $id = $_GET['id'];
           $cata = $obj->display_cataByID($id);
        }
    }

    if(isset($_POST['update_ctg'])){
        $up_msg = $obj->updata_catagory($_POST);
    }
?>


<h2>Update Catagory</h2>

<h6 class="">
    <?php if(isset($up_msg)){ echo $up_msg;} ?>
</h6>

</h4>
<form action="" method="post">


    <div class="form-group">
        <label for="u_ctg_name">Catagory Name</label>
        <input type="text" name="u_ctg_name" class="form-control" value="<?php echo $cata['ctg_name'] ?>">
    </div>

    <div class="form-group">
        <label for="u_ctg_des">Catagory descriptioon</label>
        <input type="text" name="u_ctg_des" class="form-control"  value="<?php echo $cata['ctg_des'] ?>">
    </div>

    <div class="form-group">
        <label for="u_ctg_status">Catagory Name</label>
        <select name="u_ctg_status" class="form-control">
            <option value="1">Published</option>
            <option value="0">Unpublished</option>
        </select>
    </div>

    <input type="hidden" name="u_ctg_id" value="<?php echo $cata['ctg_id'] ?>" >

    <input type="submit" value="Update Catagory" name="update_ctg" class="btn btn-primary" >

</form>