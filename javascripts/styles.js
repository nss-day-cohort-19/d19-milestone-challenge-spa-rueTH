//1. The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
    //1. A car DOM element that was clicked on.
    //1. A color name of your choice (see behavior requirement 5 above).

//
var CarLot = (function (originalCarLot) {
  // var carCard = ???? 

  originalCarLot.cardClick = function() {
    console.log("inside styles.js cardClick()");
    console.log(this);

    if ($('divVed').hasClass("selected")) {
      unSelect(); //do I need a for loop in my if condition? to run through all divVed[i]?
    }else if ($(!this).hasClass("selected")) {
      select();
    } else {  

    }
  };
  originalCarLot.unSelect = function() {
    removeClass("selected");
  };
  originalCarLot.select = function() {
    addClass("selected");
    CarLot.changeBorder();
    CarLot.changeBackground();
  };
  originalCarLot.changeBorder = function() {
    console.log("inside styles.js changeBorder()");
    
  };

  originalCarLot.changeBorder = function() {
    
  };

  return originalCarLot;

})(CarLot || {})
  
//could i not just run another for loop here that toggles every single card after the first one has been selected?












// function clickBorder (          

//           if (!event.currentTarget.classList.contains("cardClick")) {
//               for (var k = 0; k < carCards.length; k++) {
//                 carCards[k].classList.remove("cardClick");
//               }
//               CarLot.clickBorder(event.currentTarget, "cardClick");
//             } else {
//               CarLot.borderRevert(event.currentTarget, "cardClick");
//             }
