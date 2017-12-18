var scrapCounter = document.getElementById("scrapCounter");  //Amount of scrap.
var scrapScore = 0;

var hatCounter = document.getElementById("hatCounter"); //Amount of hats created. 27 scrap = one hat.
var hatScore = 0;


function addHat() {
scrapScore = scrapScore + 1;
console.log("scrap produced: " + scrapScore);
if (scrapScore > 27) {
    scrapScore = 0;
    hatScore = hatScore +1;
    console.log("Added a hat to counter: " + hatScore);  //Once scrapscore reaches 27, it turns to zero and the hat counter goes up by 1.
  }
scrapCounter.innerHTML = scrapScore;
hatCounter.innerHTML = hatScore;
}

//shop stuff
//idler1
var idlerCostId = document.getElementById("idlerCostId");
var idlerCost = 3;

var idlerOwnedId = document.getElementById("idlerOwnedId");
var idlerOwned = 0;

function buy_idler(){
  if (hatScore >= idlerCost){
    hatScore = hatScore - idlerCost;
  idlerCost = (idlerCost * 2) - 2;
  idlerOwned = idlerOwned + 1;
  console.log("Bought an idler, cost for Idler increased by 2");
  shop_idler();
}else                                           //<----- iets interresants! Wanneer je purchase succesful is koopt hij meteen opnieuw
  alert("You don't have enough hats to buy this.");
  console.log("Failed to buy Idler, not enough hats!")
  idlerCostId.innerHTML = idlerCost;
  idlerOwnedId.innerHTML = idlerOwned;
}


//idler2
var idler2CostId = document.getElementById("idler2CostId");
var idler2Cost = 16;

var idler2OwnedId = document.getElementById("idler2OwnedId");
var idler2Owned = 0;

function buy_idler2(){
  if (hatScore >= idler2Cost){
    hatScore = hatScore - idler2Cost;
  idler2Cost = (idler2Cost * 2) - 2;
  idler2Owned = idler2Owned + 1;
  console.log("Bought an ___, cost for ____ increased by 2");
  shop_idler2();
}else                                           //<----- iets interresants! Wanneer je purchase succesful is koopt hij meteen opnieuw
  alert("You don't have enough hats to buy this.");
  console.log("Failed to buy ____, not enough hats!")
  idler2CostId.innerHTML = idler2Cost;
  idler2OwnedId.innerHTML = idler2Owned;
}


// shop timers

function shop_idler(){
  setTimeout(shop_idler, 2000);
  addHat();
}

function shop_idler2(){
  setTimeout(shop_idler2, 1000);
  for (var i = 0; i < 3; i++) {
      addHat();
  }}

//no more shop stuff & shop timers
