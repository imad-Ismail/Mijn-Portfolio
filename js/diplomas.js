var i = 0;
var txt = 'Hallo Ik Ben Imad .. welkom';
var speed = 100;
// document.getElementById("medo").addEventListener("onmouseover", schrijf());

function schrijf() {
  if (i < txt.length) {
    document.getElementById("medo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(schrijf, speed);
  };
};
schrijf();


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mijnSlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}