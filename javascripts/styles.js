"use strict";

var CarLot = (function (originalCarLot) {
  originalCarLot.cardClick = function() {
    // console.log("\n", "\n"); console.log("<--------------------------------->"); console.log("==================================="); console.log("<--------------------------------->"); console.log("\n", "\n"); console.log("LET'S TAKE IT FROM THE TOP, FELLAS!");
    var card = document.getElementsByClassName("carCards");
    CarLot.unSelect(card, this);
  };
  originalCarLot.unSelect = function(horseHole, selection) {
    for (var i = 0; i < horseHole.length; i++) { // console.log("unSelect()-> inside fruitLooper"); console.log("card[", i, "] contains .selected? ", $(horseHole[i]).hasClass("selected"));
      if ($(horseHole[i]).hasClass("selected")) {
        horseHole[i].classList.remove("selected")
      }
    };
    console.log("-- CARDS CLEAN --");
    var gold = "'gold'";
    CarLot.select(selection, gold);
  };
  originalCarLot.select = function(currentTarget, fatBoy) {
    console.log(fatBoy);
    currentTarget.classList.add("selected"); 
    console.log(currentTarget.id, "has .selected?", $(currentTarget).hasClass("selected"));
    $(".selected").css("background-color", fatBoy);
    $(".selected").css("border-width", "6px");

    CarLot.cursorDirect(currentTarget);
  };
  originalCarLot.cursorDirect = function() {
    console.log("INSIDE cursorDirect()-- everything running until this point");
  };

  return originalCarLot;

})(CarLot || {})
//1. The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
    //1. A car DOM element that was clicked on.
    //1. A color name of your choice (see behavior requirement *8* above).