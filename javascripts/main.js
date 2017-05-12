"use strict";

function populatePage (inventory) {
  // Loop over the inventory and populate the page  
    console.log("populatePage", inventory);
    var container = document.getElementById("container");
  
  container.innerHTML += `<div class="row" id="row">`;
  for (var i = 0; i < inventory.length; i++) {
    
    var divVed =
        `<div class="col-xs-4 card"> 
          <img class="card-img-top img-fluid" src="${inventory[i].image}" alt="${inventory[i].year} ${inventory[i].model}">
          <div class="card-block carCards" style="background-color: #333; border: solid black 2px; color: white;" id="${inventory[i].year} ${inventory[i].model}">
            <h3 class="card-title">${inventory[i].make} ${inventory[i].model}</h3>
            <h4 class="card-subtitle mb-2 text-muted">${inventory[i].year}</h4>
            <p class="card-text">Price: $${inventory[i].price}</p>
            <p class="card-text">${inventory[i].description}</p>
          </div>
        </div>`;
    // console.log(divVed);
 
    document.getElementById("row").innerHTML += divVed;
  } 
  // Now that the DOM is loaded, establish all the event listeners needed
  //<element>.addEventListenter('<event>', function)

  
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
// populatePage(CarLot.returnInventory());

CarLot.loadInventory(populatePage);