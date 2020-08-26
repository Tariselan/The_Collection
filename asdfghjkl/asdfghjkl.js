// Variables
var coins = 1; // starting amount of coins
var wood = 0; // starting amount of wood
var stone = 0; // starting amount of stone
var numC = 1; // number that increases coin amount
var numW = 1; // number that increases wood amount
// Start function
var tBClicked = false;
function Start() {
  if (tBClicked == false) {
    const TitleDiv = document.getElementById("Title");
    TitleDiv.style.display = "none";
  }
}
// Objects
function creature(name, creCHealth, creMHealth, creBaseDamage, creCritDamage) {
  this.name = name;
  this.CHealth = creCHealth;
  this.MHealth = creMHealth;
  this.BaseDamage = creBaseDamage;
  this.CritDamage = creCritDamage;
}
function player(playerName, playerCHealth, playerMHealth, playerBaseDamage, playerCritDamage) {
  this.Name = playerName;
  this.CHealth = playerCHealth;
  this.MHealth = playerMHealth;
  this.BaseDamage = playerBaseDamage;
  this.BaseDamage = pBaseD;
  this.CritDamage = playerCritDamage;
  this.changeName = function(name) {
    name = prompt("Enter a new name:");
    if (name == "") {
      name = "Player";
    }
    this.name = name;
    document.getElementById("playerName").innerHTML = name;
    document.getElementById("playerNameS").innerHTML = name;
  }
}
var pBaseD = Math.floor(Math.random() * 10 + 5);
var pCritD = pBaseD * (Math.floor(Math.random() * 3) + 1);
var player = new player("Player", 100, 100, pBaseD, );
// Creatures

// Upgrades
var hasAxe = false; // boolean to tell the code whether or not the axe has been bought
var hasTPost = false; // boolean to tell the code whether or not the Trading Post has been bought
var hasSword = false; // boolean to tell the code whether or not the sword has been bought
// Multipliers
var coinMult = 1; // multiplier for coin function
var woodMult = 1; // multiplier for wood funtion
// Functions
function coinClick() {
  coins = (coins + numC) * coinMult; // adds number to coins and then multiplies it by its multiplier
  document.getElementById("coins").innerHTML = coins; // sets span with the id "coins" to the coin variable
}
function collectWood() {
  if (hasAxe == true) {
    wood = (wood + numW) * woodMult; // adds number to wood and then multiplies it by its multiplier
    document.getElementById("wood").innerHTML = wood; // sets span with the id "wood" to the wood variable
  }
}
function buyAxe() {
  if (hasAxe == false && coins >= 10) {
    hasAxe = true; // sets has axe to true
    coins = coins - 10; // subtracts 10 off of the coin value
    const showUTrade = document.getElementById("unlockTrade");
    showUTrade.style.opacity = "1";
    showUTrade.style.display = "inline-block";
    const buyAxe = document.getElementById("buyAxe");
    buyAxe.style.display = "none"
    document.getElementById("coins").innerHTML = coins; // sets the span with the id "coins" to the coin variable
    document.getElementById("woodButton").innerHTML = "Collect Wood"; // sets the button with the id "woodButton" to "Collect
  }
}
function unlockTrade() {
  if (hasTPost == false && coins >= 25 && wood >= 15) {
    hasTPost = true;
    coins = coins - 25;
    wood = wood - 15;
    const TPostBlock = document.getElementById("TradesBlock");
    TPostBlock.style.display = "none";
    const showBSword = document.getElementById("buySword");
    showBSword.style.opacity = "1";
    showBSword.style.display = "inline-block";
    const showUTrade = document.getElementById("unlockTrade");
    showUTrade.style.display = "none";
    document.getElementById("coins").innerHTML = coins;
    document.getElementById("wood").innerHTML = wood;
    document.getElementById("unlockTrade").innerHTML = "Bought Trading Post";
  }
}
function tradeStone() {
  if (hasTPost == true && wood >= 5) {
    numS = Math.floor(Math.random() * 3) + 1;
    stone = stone + numS; // adds number to stone
    wood = wood - 5;
    document.getElementById("wood").innerHTML = wood; // sets span with the id "wood" to the wood variable
    document.getElementById("stone").innerHTML = stone; // sets span with the id "stone" to the stone variable
  }
}
function buySword() {
  if (stone >= 6 && wood >= 10 && coins >= 22) {
    stone = stone - 6;
    wood = wood - 10;
    coins = coins - 22;
    const unlArena = document.getElementById("unlockArena");
    unlArena.style.opacity = "1";
    unlArena.style.display = "inline-block";
    const showBSword = document.getElementById("buySword");
    showBSword.style.display = "none";
    document.getElementById("stone").innerHTML = stone;
    document.getElementById("wood").innerHTML = wood;
    document.getElementById("coins").innerHTML = coins;
    document.getElementById("buySword").innerHTML = "Bought Sword";
  }
}
function unlockArena() {
  if (coins >= 100) {
    coins = coins - 100;
    const arena = document.getElementById("Arena");
    arena.style.display = "block";
    const unlArena = document.getElementById("unlockArena");
    unlArena.style.display = "none";
    document.getElementById("coins").innerHTML = coins;
    document.getElementById("unlockArena").innerHTML = "Bought Arena Pass";
  }
}
