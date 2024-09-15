console.log("JavaScript ki file chal rahi hai");

// function foo(sawal) {
//     // window pop up karwani hogi
//     // sawal display karwana hoga
//     // user se jawab haasil karna hoga
//     return jawab
// }

// foo('Did Pakistan Won the test Match ?')
// const sadsad = prompt('What is our Country Name')

// var whatIsStudentAge = prompt("Sir meri age kya hogi");

// console.log(whatIsStudentAge);

// if (whatIsStudentAge == 22) {
//   document.write("Yes sir you are correct");
// } else {
//   document.write("No sir you are incorrect");
// }

// var isSaylaniOpen = prompt("Faisal bhai kya aaj saylani khula??");

if (isSaylaniOpen == "yes") {
  document.write("Saylani jaounga");
  var isHackathon = prompt("kya aaj hackathon hoga??");
  if (isHackathon == "haan") {
    document.write("Laptop le kar Saylani aajaounga");
    var isInternet = prompt("kya internet available hoga??");
    if (isInternet == "haan") {
      document.write("Internet device ki zaroorat nahin hai");
    } else {
      document.write("Internet ki device ka intezam karna hoga");
    }
  } else {
    document.write("Laptop k bager saylani aajaounga");
  }
} else {
  document.write("Saylani nahin jaounga");
}

// ==
// ===
// less < greater
// greater > less
// <=  less than or equal too
// >=  greater than or equal too
// ! Not operator

// var talashiLi = prompt("Mobile hai ??");

// if (talashiLi) {
//   document.write("aya hun loot kar jaounga");
// }
// // ''
// if (!talashiLi) {            // nothing inside talashiLi
//   document.write("chamaat maar k jaounga");
// }

// var bike = prompt("Abbu sey bike ki chaabi mil jaeygi");

// if (bike == "haan") {
//   document.write("Apni bike per saylani jaounga");
// } else if (prompt("Kya tum saylani jaogey") == "haan") {
//   document.write("Saylani dost k sath bike per jaounga");
// } else if (prompt("kya internet chal raha hai, bykea hojaeygi") == "haan") {
//   document.write("main bikiya per saylani jaounga");
// } else {
//   document.write(
//     "Saylani ki chutti mar kar bhi nai karunga, paiyyaan paiyyan jaounga"
//   );
// }

// &&     and operator
// ||      or operator

// abbu || dost || bykea

if (
  prompt("abbu saylani le jaa rahey") == "haan" &&
  prompt("haan larkay saylani jaa rahey") == "haan" &&
  prompt("bykea horahi hai??") == "haan"
) {
  console.log("saylani jaa raha hun");
} else {
  //execution
  console.log("aaj chutti horahi hai");
}
