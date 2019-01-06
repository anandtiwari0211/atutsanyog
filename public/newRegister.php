<html>
    <head>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
        <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
        <link href="assets/css/style_message_profile.css" rel="stylesheet" type="text/css" media="all" />
        <link rel="stylesheet" href="assets/css/fontawesome-all_,essage_profile.css">

        <link href="//fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
        <link href="//fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
        <!------ Include the above in your HEAD tag ---------->

        <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
    </head>
   <style>


    /* ==========================================================================
       Author's custom styles
       ========================================================================== */

    body
    {
        font-family: 'Open Sans', sans-serif;
        width:100%;
    }
    .profile_view {
/*  border-radius: 50%;*/
}
     .header {

    background-color: transparent;
    color: #fff;
    padding: 22px;
    border-bottom: black;
    text-align: center;
    font-weight: bold;

}
    .fb-profile img.fb-image-lg{
        z-index: 0;
        width: 100%;  
        margin-bottom: 10px;
    }

    .fb-image-profile
    {
        margin: -242px 60px 5px 0px;
        z-index: 9;
        width: 20%; 
        
    position: absolute;
    }

    @media (max-width:768px)
    {

        .fb-profile-text>h1{
            font-weight: 700;
            font-size:16px;
        }

        .fb-image-profile
        {
            margin: -45px 10px 0px 25px;
            z-index: 9;
            width: 20%; 
        }
    }
    * {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.header {
    text-align: right;
    padding: 32px;
    font-size: 32px;
}

/*.row {
  display: -ms-flexbox;  IE 10 
  display: flex;
  -ms-flex-wrap: wrap;  IE 10 
  flex-wrap: wrap;
  padding: 0 4px;
}*/

/* Create two equal columns that sits next to each other */
.column {
  -ms-flex: 50%; /* IE 10 */
  flex: 50%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
}

/* Style the buttons */
.btn {
  border: none;
  outline: none;
  padding: 10px 16px;
  background-color: #f1f1f1;
  cursor: pointer;
  font-size: 18px;
}

.btn:hover {
  background-color: #ddd;
}

.btn.active {
  background-color: #666;
  color: white;
}



span.user_name {
    margin-left: 27px;
    font-size: 32px;
    font-weight: bold;
    top: 156px;
    position: absolute;
}
 body{
            padding: 0;
        }
        .section h3 {
    margin-bottom: 69px;
    font-size: 40px;
    font-weight: bold;
}
.section {
    margin: 50px 0;
}
sapn.records-button {
    width: 100%;
    margin: 0 auto;
    float: left;
    text-align: center;
    margin-bottom: 60px;
    margin-top: 60px;
}
.records-button button {
    background: transparent;
    border: 1px solid #000;
    padding: 24px 88px;
    margin: 0px 46px;
    color: #000;
    font-size: 38px;
}
</style>
       
  
    <body>
        <div class="container-fuild">
            <div class="col-xs-12">
                <div class="col-xs-6">
                    <img src="<?php echo base_url(); ?>assets/images/upload/logo-transpernt.png" width="50%" height="120px" style="padding: 16px 20px;">
                </div>
            <div class="col-xs-6">
                <div class="header">Welcome to <?php echo $user_name; ?></div>
             </div>
            </div>
            <div class="fb-profile">
   <div style="background-color:#000; padding-bottom:60px; ">             
       <video width="100%" height="400" controls="controls" autoplay="autoplay">
           <source src="<?php echo base_url();?>assets/images/upload/atutsanyog message vudeo.mp4" type="video/mp4">
       <!--<iframe style="margin-left: 270px;" width="560" height="315" src="https://www.youtube.com/embed/MALPU0UVQ-c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
     </video>
   </div>
                <img align="left" class="fb-image-profile thumbnail" src="<?php echo base_url();?>assets/images/upload/<?php echo $user_image; ?>" alt="Profile image example"/>
            </div>
        
       <div class="section">
        <h3 style="text-align: center;">Records of your profile</h3>  
        <div class="col-xs-12">
              <?php foreach ($details as $detail) { ?>
            <div class="col-xs-12" style=" position: relative;">
                 <img class="profile_view" src="<?php echo base_url();?>assets/images/upload/<?php echo $detail->image; ?>" alt="Avatar" style="width: 50%;padding: 20px 20px;">
                 <span class="user_name"><?php echo $detail->name; ?></span>
             </div>
              <?php } ?>
        </div>
        <span style="margin-left: 800px;
    color: red;
    font-size: 34px;">...so on</span>
        
        <sapn class="records-button"><button><a href="<?php echo base_url(); ?>">Cancel</a></button><button><a href="https://play.google.com/store/apps/details?id=com.atutsanyog">Processed</a></button></sapn>
           </div>
            </div>
    </body>
</html><!-- /container -->  
