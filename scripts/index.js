$(document).ready(function(){

  var d = new Date();
  var surveyDate =  (d.getMonth()+1)+ "/" + d.getDate() + "/" + d.getFullYear();
  var thirty = 30;
  var thirtyDate = d.setDate(d.getDate() + thirty); 
  var expDate =  (d.getMonth()+1)+ "/" + d.getDate() + "/" + d.getFullYear();

  $("#survey_coupon_top_text").html("Date of Survey: " + surveyDate);
  $("#survey_coupon_bottom_text").html("Expires: " + expDate);

  $("#print_coupon_btn").click(function(){
    window.open('http://splashcarwashes.com/wp-content/uploads/2017/07/3_off_coupon.png');
  });

});