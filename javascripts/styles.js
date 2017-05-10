//1. The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
    //1. A car DOM element that was clicked on.
    //1. A color name of your choice (see behavior requirement *8* above).

//
var CarLot = (function (originalCarLot) {
  // var carCard = ???? 

  originalCarLot.cardClick = function() {
    // console.log("\n", "\n");
    // console.log("<--------------------------------->");
    // console.log("===================================");
    // console.log("<--------------------------------->");
    // console.log("\n", "\n")
    // console.log("LET'S TAKE IT FROM THE TOP, FELLAS!");
    var cards = document.getElementsByClassName("carCards");
    CarLot.unSelect(cards, this);
 
  };
  originalCarLot.unSelect = function(horseHole, selection) {
    // console.log("inside unSelect()");
    for (var i = 0; i < horseHole.length; i++) {
      // console.log("unSelect()-> inside fruitLooper");
      console.log("card[", i, "] contains .selected? ", $(horseHole[i]).hasClass("selected"));
      if ($(horseHole[i]).hasClass("selected")) {
        horseHole[i].classList.remove("selected")
      }
    };
    console.log("-- CARDS CLEAN --");
    // console.log("closing unSelect() with CarLot.select(selection)--> should land within select()");
    var gold = "'gold'";
    CarLot.select(selection, gold);
  };
  originalCarLot.select = function(currentTarget, fatBoy) {
    console.log(fatBoy);
    
    currentTarget.classList.add("selected"); 
    console.log(currentTarget.id, "now equipped with .selected?", $(currentTarget).hasClass("selected"));
    
    $(".selected").css("background-color", fatBoy);
    $(".selected").css("border-width", "6px");
    // currentTarget.style.backgroundColor = fatBoy;
    // currentTarget.style.borderWidth =

    CarLot.cursorDirect(currentTarget);
  };

  originalCarLot.cursorDirect = function() {
    console.log("INSIDE cursorDirect()-- everything running until this point");
  }
  // originalCarLot.changeBorder = function(borderTarget) {
  //   console.log("imaginary BORDER added successfully.");

  //   CarLot.changeBackground(borderTarget);
  // };

  // originalCarLot.changeBackground = function(needsBackground) {
  //   console.log("imaginary BACKGROUND added successfully");
  //   console.log("-- FIN --");
  //   console.log(">> Shall we go again? :D")
  // };

  return originalCarLot;

})(CarLot || {})
  

// function clickBorder (          

//           if (!event.currentTarget.classList.contains("cardClick")) {
//               for (var k = 0; k < carCards.length; k++) {
//                 carCards[k].classList.remove("cardClick");
//               }
//               CarLot.clickBorder(event.currentTarget, "cardClick");
//             } else {
//               CarLot.borderRevert(event.currentTarget, "cardClick");
//             }
