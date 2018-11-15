
var myFoto = document.getElementById("myfoto1");
var myText = document.getElementById("mytext1");

myText.onmouseenter = function () {
    myFoto.style.visibility = "visible";

};
myText.onmouseout = function () {
    myFoto.style.visibility = "hidden";

};
var myFoto2 = document.getElementById("myfoto2");
var myText2 = document.getElementById("mytext2");


myText2.onmouseenter = function () {
    myFoto2.style.visibility = "visible";

};
myText2.onmouseout = function () {
    myFoto2.style.visibility = "hidden";

};
var myFoto3 = document.getElementById("myfoto3");
var myText3 = document.getElementById("mytext3");


myText3.onmouseenter = function () {
    myFoto3.style.visibility = "visible";
};
myText3.onmouseout = function () {
    myFoto3.style.visibility = "hidden";

};
var myFoto4 = document.getElementById("myfoto4");
var myText4 = document.getElementById("mytext4");


myText4.onmouseenter = function () {
    myFoto4.style.visibility = "visible";
};
myText4.onmouseout = function () {
    myFoto4.style.visibility = "hidden";
};

var myTexll = document.getElementById('Hoi').addEventListener("click", alertts);
function alertts() {
    alert("Hallo Ik Ben Imad")
};

var i = 0;
var txt = 'Imad Ismail';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    };
};
typeWriter();