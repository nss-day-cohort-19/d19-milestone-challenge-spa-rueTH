"use strict";

function populatePage (inventory) {
  // Loop over the inventory and populate the page  
    console.log("populatePage", inventory);
    var container = document.getElementById("output");

  for (var i = 0; i < inventory.length; i++) {
    
    var divVed =
        `<div class="col-sm-3 offset-sm-1 bordered card carCards" id="${inventory[i].year} ${inventory[i].model}">
        <h3>${inventory[i].make} ${inventory[i].model}</h3>
        <img src="../$[inventory[i].image}" alt="${inventory[i].year} ${inventory[i].model}">
        <p>Year: ${inventory[i].year}</p>
        <p>Price: $${inventory[i].price}</p>
        <p>${inventory[i].description}</p>
        </div>`;
    // console.log(divVed);
    container.innerHTML += divVed;
  } 
  // Now that the DOM is loaded, establish all the event listeners needed
  //<element>.addEventListenter('<event>', function)

  
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
// populatePage(CarLot.returnInventory());

CarLot.loadInventory(populatePage);