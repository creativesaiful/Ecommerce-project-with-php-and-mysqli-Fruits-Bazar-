<h2>Add order</h2>

<form action="">
    <table class="table" id="full_Table">
        <thead>
            <tr>
                <th>Catagory</th>
                <th>Products</th>
                <th>Price (TK)</th>
                <th>Quantity</th>
                <th>Total (TK)</th>
                <th>Action</th>


            </tr>
        </thead>

        <tbody id="table_body">
            <tr class="table_row">
                <td>
                    <select name="catagory" class="catagory">
                        <option value="" disabled selected>----Select---</option>

                        <?php
                        $rows = $obj->display_catagory();

                        while ($row = mysqli_fetch_assoc($rows)) {
                        ?>
                            <option value="<?php echo $row['ctg_id'] ?>"> <?php echo $row['ctg_name'] ?></option>

                        <?php } ?>

                    </select>
                </td>
                <td>
                    <select name="product_name" class="product_name">
                        <option value="" selected disabled>---Select one---</option>


                    </select>
                </td>
                <td>
                    <p class="product_price"></p>
                </td>
                <td>
                    <input type="number" value="1" class="quantity" style="display: none;">
                </td>

                <td>
                    <h4 class="total"></h4>
                </td>

                <td>
                    <input type="button" value="Remove" class="remove_btn" disabled>

                    
                </td>



            </tr>
        </tbody>
    </table>
</form>

<div> <input type="button" value="Add More" class="add_pdt" disabled></div>

<script>
    $(document).ready(function() {
        $(".catagory").change(function() {
            var cataId = $(".catagory").val();
            $.get("jason/show_pdt_by_ctg.php", {
                cid: cataId
            }, function(data, status) {
                $(".product_name").html(data);
            })


        });

        $(".product_name").change(function() {
            $(".quantity").show();

            var pdt_id = $(".product_name").val();
            $.get("jason/show_price_by_pdtId.php", {
                pid: pdt_id
            }, function(data, status) {
                $(".product_price").html(data), $(".total").html(data);
            })



        })

        $(".quantity").change(function() {
            var quan = $(".quantity").val();
            var pdt_price = parseInt($(".product_price").text());

            $(".total").text(quan * pdt_price);

            if (quan > 0) {
                $(".add_pdt").removeAttr("disabled");
                $(".remove_btn").removeAttr("disabled")
            } else {
                $(".add_pdt").attr("disabled", true);
                $(".remove_btn").attr("disabled", true)
            }
        })



        $("input.add_pdt").click(function(){
            var table_row = $("#table_body").first();


           var clone = table_row.clone();
        //    clone.find(':text').val('');
           $("#table_body").after(clone);

        })



        $(".remove_btn").each(function() {
            $(this).on("click", function() {
                $(this).parent("tr").remove();
            })
        })


    })
</script>