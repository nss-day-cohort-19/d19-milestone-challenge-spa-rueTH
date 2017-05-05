// "use strict";

var CarLot = (function (CarLot) {
  console.log("inside CarLot");
  var inventory = [];

  return {
    loadInventory(callback) {
      var inventoryLoader = new XMLHttpRequest();
      console.log(inventory);
      inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(this.responseText).cars;
        callback(inventory);

      });
      inventoryLoader.open("GET", "inventory.JSON");
      inventoryLoader.send();
    },
    returnInventory(){
      return inventory;
    }
  };

})(CarLot || {});

//1. The first IIFE should add a public function (e.g. `loadInventory`) that loads the 
//`inventory.json` file and stores the inventory in a private variable. It should also 
// expose a public getter to read the array of cars (e.g. `getInventory`).