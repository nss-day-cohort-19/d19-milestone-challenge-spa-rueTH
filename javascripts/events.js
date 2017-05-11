"use strict";
var CarLot = (function (originalCarLot) {
  originalCarLot.activateEvents = function() {
    console.log("activateEvents is running");
    var carCards = document.getElementsByClassName("carCards");
    for (var i = 0; i < carCards.length; i++) {
      carCards[i].addEventListener('click', CarLot.cardClick);
      }
    }
//add a class "selected"
  //   element.classList.add("selected");
  //  - changeBorder()
  //  - changeBackground()
//deselect
  // element.classList.remove("selected");
  //  
//focus cursor on input field
  //
//keyup function, mirrorText
    return originalCarLot;

})(CarLot || {})
//1. The second IIFE should augment the original one with a function that creates all of the `eventHandlers` that you need for the application. Name the function `activateEvents`.

//event listeners for click events,
//corresponding functions that run on click events   

    // function cardClick() {
      // ____.classList.add('cardClick')
      // for (i = )
    // }

// send activateEvents to third