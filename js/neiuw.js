var i = 0;
var txt = 'Hallo Ik Ben Imad .. Welcom';
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