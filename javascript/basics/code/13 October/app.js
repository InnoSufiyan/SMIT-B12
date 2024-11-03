function welcome(cb, str) {
  //salaam | sufiyan
  console.log(cb, "===>> cb");
  console.log(str, "===>> str");
  cb(str);
}

function salaam(name) {
  console.log(name, "==>> name");
  console.log("Salaam " + name);
}

welcome(salaam, "sufiyan"); //welcome higher order | salam cb

// Higher Order Function -->>> which passes another Func in arg
// Call Back Function -->> which is passed in another func arg
