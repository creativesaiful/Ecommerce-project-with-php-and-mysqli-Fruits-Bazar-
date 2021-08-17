<?php 
    $obj=new adminback();
    $cata_info = $obj-> p_display_catagory();
    if(isset($_GET['prostatus'])){
        $id = $_GET['id'];
        if($_GET['prostatus']=='edit'){
           $pdt_info= $obj->edit_product($id);
           $pdt = mysqli_fetch_assoc($pdt_info);

        }
    }

    if(isset($_POST['update_pdt'])){
        $update_msg = $obj->update_product($_POST); 
    }


?>
<h4>Update Product</h4>

<?php 
    if(isset($update_msg)){
        echo $update_msg;
    }
?>
<form action="" method="post" enctype="multipart/form-data" class="form">
    <div class="form-group">
        <label for="pdt_name">Product Name</label>
        <input type="text" name="u_pdt_name" class="form-control" value="<?php echo $pdt['pdt_name'] ?>" >
    </div>

    <input type="hidden" name="pdt_id" value="<?php echo $pdt['pdt_id'] ?>">
    <div class="form-group">
        <label for="pdt_price">Product Price</label>
        <input type="text" name="u_pdt_price" class="form-control" value="<?php echo $pdt['pdt_price'] ?>">
    </div>

    <div class="form-group">
        <label for="pdt_des">Product Description</label>
        <textarea name="u_pdt_des" cols="30" rows="10" class="form-control" ><?php echo $pdt['pdt_des']?> </textarea>
    </div>


    <div class="form-group">
        <label for="pdt_ctg">Product Catagories</label>
        <select name="u_pdt_ctg" class="form-control">
        <option value="">Select a Catagory</option>

        <?php while($cata = mysqli_fetch_assoc($cata_info)){ ?>
        <option value="<?php echo $cata['ctg_id'] ?>"><?php echo $cata['ctg_name'] ?></option>

        <?php }?>
        </select>
    </div>

    <div class="form-group">
        <label for="pdt_img">Product Image</label>
        <input type="file" name="u_pdt_img" class="form-control">
    </div>

    <div class="form-group">
        <label for="pdt_status">Status</label>
        <select name="u_pdt_status" class="form-control">
            <option value="1">Published</option>
            <option value="0">Unpublished</option>
        </select>
    </div>

    <input type="submit" value="Update Product" name="update_pdt" class="btn btn-block btn-primary">
</form>