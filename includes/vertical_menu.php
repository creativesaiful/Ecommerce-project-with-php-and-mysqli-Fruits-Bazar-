<div class="vertical-menu vertical-category-block">
    <div class="block-title">
        <span class="menu-icon">
            <span class="line-1"></span>
            <span class="line-2"></span>
            <span class="line-3"></span>
        </span>
        <span class="menu-title">All Category</span>
        <span class="angle" data-tgleclass="fa fa-caret-down"><i class="fa fa-caret-up" aria-hidden="true"></i></span>
    </div>
    <div class="wrap-menu">
        <ul class="menu clone-main-menu">

        <?php 
            foreach($cataDatas as $cataData){
        ?>
            <li class="menu-item menu-item-has-children has-megamenu">
                <a href="catagory.php?status=catView&&id=<?php  echo $cataData['ctg_id'] ?>" class="menu-name" data-title="<?php echo $cataData['ctg_name']?>"><?php echo $cataData['ctg_name']?> </a>
                
            </li>

            <?php } ?>
        </ul>
    </div>
</div>