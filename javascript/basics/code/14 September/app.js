// // const car = {
// //   make: "Suzuki",
// //   model: "B12",
// //   year: 2024,
// //   colors: ["Yellow", "Blue", "Green"],
// //   hybrid: false,
// //   drive: function () {
// //     console.log("Gaari chal rahi hai");
// //   },
// //   stop: function () {
// //     console.log("Gaari ruk gai hai");
// //   },
// //   push: function () {
// //     // kisi tareeqay se end main value add karwa dunga
// //   },
// // };

// // console.log(car.make);
// // console.log(car.model);
// // console.log(car.year);
// // console.log(car.colors);
// // console.log(car.colors[0]);
// // car.drive();
// // car.stop();

// // const onCustomerDemand = prompt("Which color you want to add");

// // car.colors.push(onCustomerDemand);

// // console.log(car.colors, "==>> colors after users demand");

// const userName = prompt(
//   "Hi, Welcome to our Website, please tell us your name??"
// );

// switch (userName) {
//   case "sufiyan":
//     console.log("Yes you are allowed");
//     break;

//   case "waris":
//     console.log("Yes you are allowed");
//     break;

//   case "Kamran":
//     console.log("Yes you are allowed");
//     break;

//   case "Farhan":
//     console.log("Yes you are allowed");
//     break;

//   default:
//     console.log("You are not allowed");
// }

// if (userName === "sufiyan") {
//   console.log("Yes you are allowed");
// } else if (userName === "waris") {
//   console.log("Yes you are allowed");
// } else if (userName === "Kamran") {
//   console.log("You are not allowed");
// } else if (userName === "Farhan") {
//   console.log("You are not allowed");
// } else {
//   console.log("You are not allowed");
// }

const person1 = {
  name: "farhan",
  age: 19,
  status: "resident",
};

const person2 = {
  name: "john",
  age: 19,
  status: "resident",
};

if (person1.age > 18 && person1.status === "resident") {
  console.log("Aap ka NIC ban sakta hai");
} else {
  console.log("Sorry NIC banney ki conditions per ap pura nahin utar rahey");
}

if (person2.age > 18 && person2.status === "resident") {
  console.log("Aap ka NIC ban sakta hai");
} else {
  console.log("Sorry NIC banney ki conditions per ap pura nahin utar rahey");
}
