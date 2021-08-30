
var randomNumber1= Math.round(Math.random() * 6);

  var randomSourceImage="images/dice" + randomNumber1    +".png" ;
  var image3 = document.querySelectorAll("img")[0];
  image3.setAttribute("src", randomSourceImage); 