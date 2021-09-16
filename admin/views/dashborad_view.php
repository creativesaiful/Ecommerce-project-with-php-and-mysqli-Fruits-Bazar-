<?php 
    date_default_timezone_set("Asia/Dhaka");

?>
<style>
    .mydiv{
        width: 200px;
        position: absolute;
        right: 38px;
        overflow: hidden;
    }
</style>
<h2>Dashborad </h2>


<div class="mydiv">
<form action="" class="form">
    <select name="filterDate" id="filterDate" class="form-control">
        <option value="<?php echo date("Y/m/d")?>" >Today</option>
        <option value="<?php echo date('Y-m-d', strtotime('-7 days')) ?>" >This week</option>
        <option value="<?php echo date('Y-m-d', strtotime('-30 days')) ?>" >This Month</option>
        <option value="<?php echo date('Y-m-d', strtotime('-365 days')) ?>" >This Year</option>
        <option value="2020-01-01" >Life Time</option>
    </select>
</form>
</div>


<script>
    $(document).ready(function(){
      

        $("#filterDate").change(function(){
            var filterId = this.value;

            $.ajax({
                 url: "json/dashboard_json.php",
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
                 url: "json/dashboard_json.php",
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
                 url: "json/dashboard_json.php",
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
                 url: "json/dashboard_json.php",
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
                 url: "json/dashboard_json.php",
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
                 url: "json/dashboard_json.php",
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



        })
    })
</script>


<br> <br> <br>
<div class="row">



<!-- order-card start -->

<div class="col-md-6 col-xl-3">
    <div class="card bg-c-blue order-card">
        <div class="card-block">
            <h6 class="m-b-20">Orders Received</h6>
            <h2 class="text-right"><i class="ti-shopping-cart f-left"></i><span id="totalOrder">0</span></h2>
            <p class="m-b-0"><span class="f-right"></span></p>
        </div>
    </div>
</div>


<div class="col-md-6 col-xl-3">
    <div class="card bg-c-green order-card">
        <div class="card-block">
            <h6 class="m-b-20">Total Sales</h6>
            <h2 class="text-right"><i class="ti-tag f-left"></i><span id="totalSell">0</span></h2>
            <p class="m-b-0"><span class="f-right"></span></p>
        </div>
    </div>
</div>
<div class="col-md-6 col-xl-3">
    <div class="card bg-c-yellow order-card">
        <div class="card-block">
            <h6 class="m-b-20">Satisfied Customer</h6>
            <h2 class="text-right"><i class="ti-reload f-left"></i><span id="totalCustomer">0</span></h2>
            <p class="m-b-0"><span class="f-right"></span></p>
        </div>
    </div>
</div>
<div class="col-md-6 col-xl-3">
    <div class="card bg-c-pink order-card">
        <div class="card-block">
            <h6 class="m-b-20">Delivered Order</h6>
            <h2 class="text-right"><i class="ti-wallet f-left"></i><span id="DeliverOrder">0</span></h2>
            <p class="m-b-0"><span class="f-right"></span></p>
        </div>
    </div>
</div>

<div class="col-md-6 col-xl-3">
    <div class="card bg-c-pink order-card">
        <div class="card-block">
            <h6 class="m-b-20">Processing Order</h6>
            <h2 class="text-right"><i class="ti-wallet f-left"></i><span id="processingOrder">0</span></h2>
            <p class="m-b-0"><span class="f-right"></span></p>
        </div>
    </div>
</div>

<div class="col-md-6 col-xl-3">
    <div class="card bg-c-yellow order-card">
        <div class="card-block">
            <h6 class="m-b-20">Pending Order</h6>
            <h2 class="text-right"><i class="ti-reload f-left"></i><span id="pendingOrder">0</span></h2>
            <p class="m-b-0"><span class="f-right"></span></p>
        </div>
    </div>
</div>


<!-- order-card end -->


<!-- users visite and profile start -->

<!-- users visite and profile end -->

</div>
</div>

