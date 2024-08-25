//Array   -->> [value1, value2, value3, value4]
// separate -->> juda karna
//comma separated

// var student1Name = "Uzair";
// var student2Name = "Farasat";
// var student3Name = "Mehdi";
// var student4Name = "Taha";

// var students = ["Uzair", "Farasat", "Mehdi", "Taha"];
// console.log(students, "==>> students")

//Array is just like a Cupboard || Shelf

//Resturant

// var resturant = [
//   "biryani",
//   "korma",
//   "pulao",
//   "nihari",
//   "tikka",
//   "spegghati",
//   "malai boti",
//   "paey",
// ];

// var customerDemand = +prompt("Haan bhae kya khaogey");
// console.log(customerDemand, "==>> customerDemand")

// document.write(resturant[customerDemand]);

//Functions -->> Machine

// function betaPaniLeKarAao() {
//   console.log("Haramain beta, zara room se bahir niklo");
//   console.log("samney cupboard k barabar main, ek water cooler hoga");
//   console.log("us k pass jao");
//   console.log(
//     "is k barabar main ek glass hoga, us ko bari ehtiyat k sath uthao"
//   );
//   console.log("water cooler ki ek tooti hogi, us k neechey is glass ko rakhna");
//   console.log("tooti ko on karna, glass bharney ka wait karna");
//   console.log("glass pani se bhar jaey to tooti band kardena");
//   console.log("pani ka glass le kar wapis aajana");
// }

// betaPaniLeKarAao()

// function milkShakeBanaDo() {
//   console.log("aam nikalney hain freeze se");
//   console.log("chilka utar lengey iska");
//   console.log("slices banaengey aaam k");
//   console.log("juicer machine k jug k ander slices daal do gey");
//   console.log("cheeni aur doodh mix karna hai na sir");
//   console.log("is k machine ko on kardengey, aur shake tayyar hojaega");
//   console.log(
//     "shake tayyar hojaey to machine band kar dengey, aur glass main juice nikal lengey"
//   );
// }

// milkShakeBanaDo();

// alert('salaam')    //arguments
// console.log('Allah Hafiz')    //arguments
// document.write('Good morning')    //arguments

//dynamic function bana raha hun, with different scenarios

// function betaLeKarAao(liquid) {
//   //parameter   liquid = 'leemoPani' -->>var
//   console.log("Haramain beta, zara room se bahir niklo");
//   console.log("samney cupboard k barabar main, ek cooler hoga");
//   console.log("us k pass jao");
//   console.log(
//     "is k barabar main ek glass hoga, us ko bari ehtiyat k sath uthao"
//   );
//   console.log("cooler ki ek tooti hogi, us k neechey is glass ko rakhna");
//   console.log("tooti ko on karna, glass bharney ka wait karna");
//   console.log(`glass ${liquid} se bhar jaey to tooti band kardena`);
//   // console.log("glass " + liquid + " se bhar jaey to tooti band kardena");
//   console.log(`${liquid} ka glass le kar wapis aajana`);
//   // console.log(liquid + " ka glass le kar wapis aajana");
// }

// betaLeKarAao("leemoPani"); //argument -->>   //pani //tang //leemoPani //roohAfza

// function milkShakeBanaDo(fruit) {
//   //parameter
//   console.log(fruit + " nikalney hain freeze se");
//   console.log("chilka utar lengey iska");
//   console.log("slices banaengey " + fruit + " k");
//   console.log("juicer machine k jug k ander slices daal do gey");
//   console.log("cheeni aur doodh mix karna hai na sir");
//   console.log(
//     "is k machine ko on kardengey, aur " + fruit + " shake tayyar hojaega"
//   );
//   console.log(
//     fruit +
//       " shake tayyar hojaey to machine band kar dengey, aur glass main juice nikal lengey"
//   );
// }

// milkShakeBanaDo("aslam"); //argument

// function foo1() {
//   console.log('salaam')
//   return
//   alert('Salaam')
// }
// function foo2() {
//   alert('Allah Hafiz')
// }
// function foo3() {
//   alert('Good Morning')
// }
// function foo4() {
//   alert('Good Bye')
// }

// console.log('1')
// console.log('2')
// console.log('3')
// console.log('4')

// foo1()

// function calculator() {
//   return 'sufiyan'
//   // koi bhi line nahin chaleygi , kiyun k is k uper return laga hwa hai
// }

// var result = calculator()

// console.log(result)   //??

// function calculator(param1, param2) {
//   //params
//               //"2"        //5
//   return param1 + param2
// }

// console.log(calculator("Suky", "Bal")) //argu

// function fullName(firstName, lastName) {   //undefined //undefined
//   return firstName + " " + lastName;
// }

//function expression
const fullName = function (firstName, lastName) {
  return firstName + " " + lastName;
};

fullName()
