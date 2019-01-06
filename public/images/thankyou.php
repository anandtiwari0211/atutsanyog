<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {font-family: Arial, Helvetica, sans-serif;}

/* The Modal (background) */
.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s
}

/* Add Animation */
@-webkit-keyframes animatetop {
  from {top:-300px; opacity:0} 
  to {top:0; opacity:1}
}

@keyframes animatetop {
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}

/* The Close Button */
.close {
  color: white;
  float: right;
  font-size: 50px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-header {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
}

.modal-body {padding: 2px 16px;}

.modal-footer {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
}
.welcome_title {
    /* margin-top: 12px; */
    font-size: 18px;
    margin-right: 0px;
    /* right: 49px; */
    margin-left: 0px;
    text-align: center;
}
.number_msg {
    /* margin-left: 260px; */
    /* font-size: 16px; */
    width: 100%;
    margin: 0 auto;
    text-align: center;
}
.col-xs-2.close_symbl {
    float: right;
}
.number_input {
     font-weight: bold; 
    width: 100%;
    margin: 22px 0;
    text-align: center;
    
}
.number_input input[type="text"] {
    padding: 10px 10px;
}
.close.close_symbl {
    font-size: 42px;
}
.button {
    text-decoration: none;
    color: black;
    font-weight: bold;
    width: 120px;
    height: 42px;
}
.col-xs-3, .col-xs-6, .col-xs-2, .logo_image {
    padding: 0 !important;
    font-size: 18px;
    float: left;
}
a.button input {
    margin-top: 22px;
    background: transparent;
    border: 1px solid #a9a9a9;
    padding: 10px 32px;
}

</style>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>

<!--<h2>Animated Modal with Header and Footer</h2>-->

<!-- Trigger/Open The Modal -->
<!--<button id="myBtn">Open Modal</button>-->

<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
        <div class="col-xs-12">
             <div class="col-xs-2 logo_image"><img src="<?php echo base_url(); ?>assets/images/logo-atut.png" width="55" height="35"></div>
             
             <div class="col-xs-8 welcome_title"><?php echo $atutsanyog_title->welcome_title; ?></div>
             <div class="col-xs-2 close_symbl"><span class="close"><a href="<?php echo base_url(); ?>">&times;</a></span></div>
             
        </div>
    </div>
    <div class="modal-body">
      <div class="number_msg">Write your REGISTERED number of Atutsanyog and Find Records For You.</div>
      <form method="post" action="http://atutsanyog.com/message_profile">
          <div class="number_input">
              <input type="text" name="mobile_number" placeholder="Mobile Number" required="required" minlength="10" maxlength="10" autocomplete="off">
              <p class="error"><?php echo $this->session->flashdata('message')?></p>
              <br/>
                  <input type="Submit" value="Login" class="button btn-success">
          </div>
          </form>
    </div>
    <div class="modal-footer">
      <h3>Any Query ?</h3>
      <img src="https://img.icons8.com/windows/64/000000/phonelink-ring.png" width="25" height="25">
      :+91-9424554800, +91-8989073128, +91-9977661212
      <h5>Regards:- Atutsanyog Team</h5>
    </div>
  </div>

</div>

<script>
    
$(document).ready(function () {
//    $('#myModal').modal('show');
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
});

//$(document).click(function(e) {
//    if (!$(e.target).closest('.modal').length) {
//        alert('click outside!');
//    }
//});
    
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
      alert('sfsfsf');
    modal.style.display = "none";
  }
}
</script>


</body>
</html>
