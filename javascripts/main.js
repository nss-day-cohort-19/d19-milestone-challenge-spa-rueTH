
function populatePage (inventory) {
  // Loop over the inventory and populate the page  
    var container = document.getElementById("container");
    var divVed = document.createElement("DIV").classList.add('carCards');
  for (var i = 0; i < inventory.length; i++) {
    var putTo_DivVed =
        `<div class="col-sm-3 offset-sm-1 bordered card" id="${inventory[i].year} ${inventory[i].model}">
        <h3>${inventory[i].make} ${inventory[i].model}</h3>
        <img src="../$[inventory[i].image}" alt="${inventory[i].year} ${inventory[i].model}">
        <p>Year: ${inventory[i].year}</p>
        <p>Price: $${inventory[i].price}</p>
        <p>${inventory[i].description}</p>
        </div>`;
    
    container.appendChild(divVed);
    divVed.innerHTML += putTo_DivVed;
  } 
  // Now that the DOM is loaded, establish all the event listeners needed
  //<element>.addEventListenter('<event>', function)
  
  divVed[i].addEventListener('hover', cardHover);
  divVed[i].addEventListener('click', cardClick);
    var activateEvents = function() {
      var carCards = document.getElementsByClassName("carCards");
      // var textInput = document.getElementById("????");
      for (var i = 0; i < carCards.length; i++) {
        carCards[i].addEventListener('click', (event) => {
          console.log(event.curentTarget.classList.contains("cardClick")) {
            if (!event.currentTarget.classList.contains("cardClick")) {
              for (var k = 0; k < carCards.length; k++) {
                carCards[k].classList.remove("cardClick");
              }
              CarLot.clickBorder(event.currentTarget, "cardClick");
            } else {
              CarLot.borderRevert(event.currentTarget, "cardClick");
            }
          }
        })
        carCards[i].addEventListener('hover', (event) => {
          console.log(event.currentTarget.classList.contains("cardHover")) {
            if (!event.currentTarget.classList.contains("cardHover")) {
              //k is for previously targeted card with augmented boarder (via event.classList.add())
              for (var k = 0; k < carCards.length; k++) {
                carCards[k].classList.remove("cardHover");
              }
              CarLot.hoverBoarder(event.currentTarget, "cardHover");
            } else {
              CarLot.borderRevert(event.currentTarget, "cardHover");
            }
          }
        })
      }
    }
    function cardHover() {
      // ____.classList.add('cardHover')
      // for (i = )
    }

  // CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
// populatePage(CarLot.returnInventory());

CarLot.loadInventory(populatePage);