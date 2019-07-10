var slideIndex = 1;
window.onload = function(){
    showDivsT(slideIndex);
    showDivsA(slideIndex);
}

function plusDivsT(n) {
  showDivsT(slideIndex += n);
}

function showDivsT(n) {
  var i;
  var x = document.getElementsByClassName("tSlides");
  if (n > x.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndex-1].style.display = "block"; 
}

function plusDivsA(n) {
    showDivsA(slideIndex += n);
  }
  
  function showDivsA(n) {
    var i;
    var x = document.getElementsByClassName("aSlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
  }