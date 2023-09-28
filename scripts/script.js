// JavaScript Document
console.log("hi");





// hamburge menu //

var HamburgerButton = document.querySelector("button")
var Hamburgerul = document.querySelector("ul")

HamburgerButton.onclick = function () {
    Hamburgerul.classList.toggle ("open")

}

  







// //benden scrollen pagina //

//   document.querySelectorAll('button').forEach(function(button) {
//     button.addEventListener('click', function(event) {
//       // Voorkom standaardgedrag (navigeren naar de bovenkant van de pagina)
//       event.preventDefault();

//       // Haal de id van de bijbehorende sectie uit de href van de link
//       var targetId = this.parentElement.getAttribute('href').substring(1);

//       // Zoek de doelsectie op basis van de id
//       var targetSection = document.getElementById(targetId);

//       // Scroll naar de bovenkant van de doelsectie
//       window.scrollTo({
//         top: targetSection.offsetTop,
//         behavior: 'smooth'
//       });
//     });
//   });