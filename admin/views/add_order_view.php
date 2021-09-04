 <?php
    $rows = $obj->display_catagory();

    $catagory = "";

    foreach ($rows as $row) {
        $catagory .= "<option value=" . $row['ctg_id'] . ">" . $row['ctg_name'] . "</option>";
    }

    ?>


 <h2>Add order</h2>

 <form action="" method="post">
     <div class="table-responsive">
         <table class="table table-bordered" name="item-table">
             <thead>
                 <tr>
                     <th>Catagory</th>
                     <th>Products</th>
                     <th>Price (TK)</th>
                     <th>Quantity</th>
                     <th>Total (TK)</th>
                     <th> <button type="button" name="add" class="btn btn-success btn-sm add"> add </button> </th>


                 </tr>
             </thead>


             <tbody>



             </tbody>
         </table>
     </div>
 </form>


 <script>
     $(document).ready(function() {
         var count = 0;

         $(document).on("click", ".add", function() {
             count++;
             var html = "";
             html += "<tr>";
             html += '<td><select name="catagory[]" id="catagory" class="form-control item_category" data-catagory-id=' + count + '><option value="">Select Category</option><?php echo $catagory ?></select></td>';

             html += '<td><select name="product_name[]" class="form-control product_name" id="product_name' + count + '" data-product-id=' + count + '><option value="">Select Product</option> </select></td>';

             html += '<td> <span name="product_price[]" class="form-control product_price" id="product_price' + count + '" data-product-price=' + count + '> </span> </td>';

             html += '<td> <input type="number" value="1" name="product_quantity[]" class="form-control product_quantity" id="product_quantity' + count + '">  </td>';

             html += '<td> <span name="total_price[]" class="form-control total_price" id="total_price' + count + '"> </span> </td>';

             html += '<td><button type="button" name="remove" class="btn btn-danger remove">Remove</button></td>';



             html += '';


             $("tbody").append(html);


             $(document).on('click', '.remove', function() {
                 $(this).closest('tr').remove();
             });

         })

         $(document).on('change', '.item_category', function() {
             var category_id = $(this).val();
             var product_id = $(this).data('catagory-id');

             $.ajax({
                 url: "json/show_pdt_by_ctg.php",
                 method: "POST",
                 data: {
                     action: 'load_product',
                     cid: category_id
                 },
                 success: function(data) {
                     var html = '<option value="">Product Name</option>';
                     html += data;
                     $('#product_name' + product_id).html(html);
                 }
             })

         })


         $(document).on('change', '.product_name', function() {
             var product_id = $(this).val();

             if (product_id != '') {

                 var price_id = $(this).data('product-id');


                 $('#product_price' + price_id).text('250');

                 $.ajax({
                     url: "json/show_pdt_by_ctg.php",
                     method: "POST",
                     data: {
                         action: 'load_price',
                         pid: product_id
                     },
                     success: function(data) {
                         //  var html = '<option value="">Product Price</option>';
                         var pdt_price = data;
                         $('#product_price' + price_id).html(pdt_price);
                     }
                 })
             }



         })


         

     


       
            

             $(document).on("change", (".product_quantity"), function() {
                 

                var pdt_price_id = $(".product_price").data('product-price');
                var quantity = $("#product_quantity"+pdt_price_id).val();

                var pro_id = $("#product_name"+pdt_price_id).val();


                $.ajax({
                     url: "json/show_pdt_by_ctg.php",
                     method: "POST",
                     data: {
                         action: 'total_price',
                         pdt_id: pro_id,
                         quantity:quantity

                     },
                     success: function(data) {
                         //  var html = '<option value="">Product Price</option>';
                         var pdt_price = data;
                         $('#total_price'+pdt_price_id).text(pdt_price);
                     }
                 })

                 
             })
      



        //  $(document).on("change", (".product_quantity"), function(){
        //          var quantity = $(this).val();
        //          var pdt_price_id = $(".product_price").data('product-price');

        //          var single_pro_price = parseInt($("#product_price"+pdt_price_id).text());
        //      //    alert (single_pro_price);

        //          $('#total_price'+pdt_price_id).text(quantity*single_pro_price);
        //  })













     })
 </script>