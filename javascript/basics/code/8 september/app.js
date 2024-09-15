// var officeMenu = [
//   "daal chawal",
//   "Korma",
//   "sabzi",
//   "sabzi",
//   "biryani",
//   "Fast Food",
// ];

// var foodDay = prompt("Konsey din ka khana jaanna chah rahey ho??");

// document.write(officeMenu[foodDay]);

var resturantMenuWeekDays = [
  //chotey shuruwat se items ko copy karo, 3 se pehley pehley tak
  "Biryani",
  "Korma",
  "Karhai",
  "Sabzi",
  "Daal Chawal",
];

// add Dish // remove Dish

// .length  -->> Get Length of Complete Array
// arr[indexNumber] -->> Get Specific Element
// .push() -->> method -->> function   -->>> element add from last
// .pop() -->> method -->> function    -->>> element remove from last
// .shift() -->> method -->> function    -->>> element remove from start
// .unshift() -->> method -->> function    -->>> element add from start

// .splice() -->> method -->> function -->> add / remove from anywhere
// .slice() -->> method -->> function -->> copy from anywhere

resturantMenuWeekDays.push("Chinese Chawal");

// var customerRequirement = prompt(
//   "Umer bhai konsi dish ap ko add karwani hai Menu main"
// );

// resturantMenuWeekDays.push(customerRequirement);

var resturantMenuWeekendDays = resturantMenuWeekDays.slice(0, 3);
