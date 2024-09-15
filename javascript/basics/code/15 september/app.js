// var cleanestCities = [
//   "Cheyenne",
//   "Santa Fe",
//   "Tucson",
//   "Great Falls",
//   "Honolulu",
//   "karachi",
//   "islamabad",
// ];

const userInput = prompt("Kya khaeyngey aap??");

// if (
//   userInput === cleanestCities[0] ||
//   userInput === cleanestCities[1] ||
//   userInput === cleanestCities[2] ||
//   userInput === cleanestCities[3] ||
//   userInput === cleanestCities[4] ||
//   userInput === cleanestCities[5] ||
//   userInput === cleanestCities[6]
// ) {
//   alert("Yes aap ek saaf suthrey sheher main rehtey ho");
//   console.log("Yes aap ek saaf suthrey sheher main rehtey ho");
// } else {
//   alert("Sorry aap saaf suthrey sheher main nahin rehtey ho");
//   console.log("Sorry aap saaf suthrey sheher main nahin rehtey ho");
// }

const resturantMenu = [
  "biryani",
  "butter chicken",
  "pilaow",
  "bhindhi",
  "daal chawal",
  "korma",
  "paaey",
  "nihari",
];

var coldDrinkStock = ["Pakola", "nextCola", "FizzUp", "Gourmet"];

var itemMila = false;
var coldDrinkMili = false;

for (i = 0; i < resturantMenu.length; i++) {
  if (userInput === resturantMenu[i]) {
    console.log(
      "User ko " +
        resturantMenu[i] +
        " provide kardeni hai, jo k counter number " +
        i +
        " sey mil jaeygi"
    );
    itemMila = true;
    var coldDrink = prompt("Aap konsi cold drink piyo gey?");
    for (j = 0; j < coldDrinkStock.length; j++) {
      if (coldDrink === coldDrinkStock[j]) {
        console.log(
          "User ko " + coldDrinkStock[j] + " colddrink provide kardeni hai"
        );
        coldDrinkMili = true;
      }
    }
    break;
  }
}

if (itemMila) {
  console.log("Ustad dish deliver kardi hai");
} else {
  console.log(userInput + " nahin hai");
}

if (coldDrinkMili) {
  console.log("Ustad colddrink bhi bech di");
} else {
  console.log("Israeli product nahin rakhtey hain hum");
}
