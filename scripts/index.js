$(document).ready(function(){

  var d = new Date();
  var surveyDate =  (d.getMonth()+1)+ "/" + d.getDate() + "/" + d.getFullYear();
  var thirty = 30;
  var thirtyDate = d.setDate(d.getDate() + thirty); 
  var expDate =  (d.getMonth()+1)+ "/" + d.getDate() + "/" + d.getFullYear();

  $("#survey_coupon_top_text").html("Date of Survey: " + surveyDate);
  $("#survey_coupon_bottom_text").html("Expires: " + expDate);

  $("#print_coupon_btn").click(function(){
    $("#print_coupon_btn").hide();
    $("header").hide();
    $("footer").hide();
    $("#thank_you_header").hide();
    $("#splash-desktop-menu-fixed").hide();
    $("#splash-desktop-menu-white").hide();
    $("#splash-desktop-menu-blue").hide();
    $("#survey_coupon_and_date").show();
    window.print();
  });

});