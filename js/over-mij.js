var i = 0;
var txt = "Over mij";
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