<?php
date_default_timezone_set("Asia/Dhaka");

    $links = $obj->display_links();
    $link= mysqli_fetch_assoc($links);

  
    

?>
<style>
    .mydiv {
        width: 200px;
        position: absolute;
        right: 38px;
        overflow: hidden;
    }
</style>

<div class="container">
    <div class="d-flex justify-content-center">
        <a href="#">

            <?php
            $obj = new adminback();
            $logo_info = $obj->display_logo();

            $logo = mysqli_fetch_assoc($logo_info);

            ?>
            <img class="img-fluid my-3" src="uploads/<?php echo $logo['img']; ?>" width="200px" alt="Theme-Logo" />
        </a>

    </div>
    <h4 class="text-center">Sales Report</h4>
    <p class="text-center">From <span id="from" class="font-weight-bold"></span> T0 <span id="to" class="font-weight-bold"> <?php $mydate=getdate(date("U"));
echo "$mydate[year]-$mydate[mon]-$mydate[mday]"; ?> </span></p>

<p class="text-center">Email: <?php echo $link['email'] ?>, Phone: <?php echo $link['phone'] ?> </p>

</div>









<div class="mydiv">
    <form action="" class="form">
        <select name="filterDate" id="filterDate" class="form-control">
            <option value="<?php echo date("Y-m-d") ?>">Today</option>
            <option value="<?php echo date('Y-m-d', strtotime('-7 days')) ?>">This week</option>
            <option value="<?php echo date('Y-m-d', strtotime('-30 days')) ?>">This Month</option>
            <option value="<?php echo date('Y-m-d', strtotime('-365 days')) ?>">This Year</option>
            <option value="2020-01-01">Life Time</option>
        </select>
    </form>
</div>
<div class="div">
    <br> <br>
    <table class="table table-bordered">
        <thead>
            <tr class="bg-secondary">
                <th>
                    Total Place Order
                </th>
                <th>Total Amount</th>
                <th>Pending Order</th>
                <th>Processing Order</th>
                <th>Deliverd Order</th>
                <th>Total Customer</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td id="totalOrder"></td>
                <td id="totalSell"></td>
                <td id="pendingOrder"></td>
                <td id="processingOrder"></td>
                <td id="DeliverOrder"></td>
                <td id="totalCustomer"></td>
            </tr>
        </tbody>
    </table>
</div>


<br>

<div>
    <h5>Sells By Products</h5> <br>
    <table class="table table-bordered table-striped">
        <thead>
            <tr class="bg-secondary">
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Amount</th>

            </tr>
        </thead>

        <tbody id="sell_by_pdt">


        </tbody>


    </table>


</div>

<br><br>
<div>
    <h5>Sells By Customer</h5> <br>
    <table class="table table-bordered table-striped">
        <thead>
            <tr class="bg-secondary">
                <th>Customer</th>
                <th>Total Order</th>
                <th>Amount</th>


            </tr>
        </thead>

        <tbody id="sell_by_customer">


        </tbody>


    </table>


</div>





<script>
    $(document).ready(function() {



        $("#filterDate").change(function() {

            var filterId = this.value;
            $("#from").text(filterId);

            $.ajax({
                url: "json/report_json.php",
                method: "POST",
                data: {
                    action: 'load_allorder',
                    did: filterId
                },
                success: function(data) {
                    var html = data;

                    $('#totalOrder').text(data);
                }
            });

            $.ajax({
                url: "json/report_json.php",
                method: "POST",
                data: {
                    action: 'load_allsell',
                    did: filterId
                },
                success: function(data) {
                    var html = data;

                    $('#totalSell').text(data);
                }
            });

            $.ajax({
                url: "json/report_json.php",
                method: "POST",
                data: {
                    action: 'load_allcustomer',
                    did: filterId
                },
                success: function(data) {
                    var html = data;

                    $('#totalCustomer').text(data);
                }
            });

            $.ajax({
                url: "json/report_json.php",
                method: "POST",
                data: {
                    action: 'load_delivered_order',
                    did: filterId
                },
                success: function(data) {
                    var html = data;

                    $('#DeliverOrder').text(data);
                }
            });
            $.ajax({
                url: "json/report_json.php",
                method: "POST",
                data: {
                    action: 'load_processing_order',
                    did: filterId
                },
                success: function(data) {
                    var html = data;

                    $('#processingOrder').text(data);
                }
            });

            $.ajax({
                url: "json/report_json.php",
                method: "POST",
                data: {
                    action: 'load_pending_order',
                    did: filterId
                },
                success: function(data) {
                    var html = data;

                    $('#pendingOrder').text(data);
                }
            });




            $.ajax({
                url: "json/report_json.php",
                method: "POST",
                data: {
                    action: 'sell_by_product',
                    did: filterId
                },
                success: function(data) {
                    var html = data;

                    $('#sell_by_pdt').html(data);

                }
            });

            $.ajax({
                url: "json/report_json.php",
                method: "POST",
                data: {
                    action: 'sell_by_customer',
                    did: filterId
                },
                success: function(data) {
                    var html = data;

                    $('#sell_by_customer').html(data);

                }
            });




        });


    })
</script>