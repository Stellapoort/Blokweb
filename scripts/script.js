// JavaScript Document
console.log("hi");


// hamburge menu //

var HamburgerButton = document.querySelector("button")
var Hamburgerul = document.querySelector("ul")

HamburgerButton.onclick = function () {
    Hamburgerul.classList.toggle ("open")

}


// geluidje //

var images = document.querySelectorAll('img');

images.forEach(function(image) {
  image.addEventListener('click', function() {
    var audio = new Audio("sound/buttonklik.mp3");
    audio.play();
  });
});


var buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    var audio = new Audio("sound/buttonklik.mp3");
    audio.play();
  });
});


var spans = document.querySelectorAll('span');

spans.forEach(function(span) {
  span.addEventListener('click', function() {
    var audio = new Audio("sound/buttonklik.mp3");
    audio.play();
  });
});





