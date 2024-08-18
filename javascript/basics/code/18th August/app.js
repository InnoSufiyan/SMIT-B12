// var abc = "sufiyan";

// =  -->> assignment operator

// ==    -->> comparison
// ===   -->> comparison with data type

// 2 == "2"   -->> true
// 2 === "2"  -->> false

// real life example below

// var glass1 = 'Meetha Pani'
// var glass2 = 'Khara Pani'

// glass1 == glass2  // true
// glass1 === glass2 // false

// var userAge = prompt("Bhai saab, aap ki age kya hai");

// console.log(userAge, "==>> userAge");
// // "18" === 18  // false
// if (userAge >= 18) {         // 18 > 18
//   alert("User is allowed to enter website");
// }

// var verifiedUser = "Muhammad Sufiyan";

// var firstName = prompt("What is your first Name");
// var lastName = prompt("What is your last Name");

// if (verifiedUser == firstName + " " + 'Sufiyan') {
//   alert("Hello , you are allowed to access website");
// }

// if(condition) {
//     //execution
// }

// var bhaiPhone = prompt("Khaney main kya khao gey");

// if (bhaiPhone == "biryani") {
//   alert("Biryani le kar ghar puhanch jaounga");
// } else {
//   alert("bhai biryani k ilawa kuch nahin hai, main ghar aa raha hun.");
// }

// var blockedUser = "Waris Khan";

// var userName = prompt("bhai saaab aap ka naam kya hai?");

// if (blockedUser !== userName) {
//   //userName -->> waris khan
//   alert("Yes you are allowed on the website");
// }

// var isUserBlind = prompt("Are you blind?"); //yes no

// if (isUserBlind !== "yes") {
//   alert("Yes you are allowed to create license");
// } else {
//   alert("You are not allowed to create license");
// }

// >  greater than
// <  less than
// >= greater than or equal too
// <= less than or equal too

// var discountedPriceLimitOnShopping = 5000;

// var discountedPercentage = 10;

// var userItem1Price = +prompt("Item 1 ki price btaeyn");
// var userItem2Price = +prompt("Item 2 ki price btaeyn");
// var userItem3Price = +prompt("Item 3 ki price btaeyn");

// var userExpenses = userItem1Price + userItem2Price + userItem3Price;

// if (userExpenses > discountedPriceLimitOnShopping) {
//   //es6
//   alert(
//     `Congratulations, You have recieved a discounted voucher, the  percentage of the discount is ${discountedPercentage} percent, which is ${
//       (userExpenses * 10) / 100
//     }`
//   );
//   //   es5
//   //   alert(
//   //     "Congratulations, You have recieved a discounted voucher, the percentage of the discount is " +
//   //       discountedPercentage +
//   //       " percent, which is " +
//   //       (userExpenses * 10) / 100
//   //   );
// }

// if(condition) {
//     // execution
//     // execution
//     // execution
//     // execution
//     // execution
//     // execution
//     // execution
// } else {
//     // execution
//     // execution
//     // execution
//     // execution
//     // execution
//     // execution
//     // execution
// }

// var drinkChai = prompt("Chai piyo gey");

// if (drinkChai == "yes") {
//   // execution
//   console.log("Dekchi k ander pani boil kareygi");
//   console.log("ubalney se pehley patti daal deygi");
//   console.log("ubalney k baad is doodh daal deygi");
//   console.log("aur end khoob cheeni ki milawat hogi");
//   console.log("aur phir chai shohar ko de gi jaeygi");
// } else {
//   // execution
//   console.log("beghum aaraam kareygi");
// }

// var isBlind = prompt("Kya aap blind ho??");

// var age = prompt("aap ki age kya hai??");

// && (and)    || (or)

// if (
//   (isBlind !== "yes" && age >= 18) ||
//   prompt("kya aap rishwat do gey") == "yes"
// ) {
//   //execution
//   alert("Yes you can create license");
// } else {
//   //execution
//   alert("No you cannot create license");
// }

// var bhaiPhone = prompt("khaney main kya khaogey");

// if (bhaiPhone == "biryani" || bhaiPhone == "tikka" || bhaiPhone == "shawarma") {
//   alert("khana le kar aaraha hun");
// } else {
//   alert("Sorry bhai yeh available nai hai, main aesay hi ghar aaraha hun");
// }

// var bhaiPhoneOption1 = prompt("Kya tandoor wala khula hai");

// if (bhaiPhoneOption1 == "yes") {
//   alert("Korma le kar aajao");
// } else {
//   var bhaiPhoneOption2 = prompt("phir kya le kar aaoun");
//   if (bhaiPhoneOption2 == "biryani") {
//     alert("biryani le kar aajaounga");
//   } else {
//     alert("aesay hi ghar ajaounga");
//   }
// }

var tandoor = prompt("kya tandoor wala khula hai");
var chickenTikka = prompt("kya tikka wala khula hai");
var korma = prompt("kya korma wala khula hai");

if (tandoor == "yes" && (chickenTikka == "yes" || korma == "yes")) {
  alert("Main roti k sath tikka ya korma le aaounga");
} else {
  alert("roti nahin mili main aesay hi aagaya");
}
