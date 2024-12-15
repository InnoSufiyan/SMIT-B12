var arrOfTodoList = [];

function submitHandler() {
  console.log("===>> chal raha hun");

  // input ki jitni bhi values hain, hamari list main ajaeyn

  // input k element ko haasil karna hoga
  var inputElem = document.querySelector("input");
  // input ki value haasil karni hogi
  console.log(inputElem.value, "==>> inputElem");

  // apni html ki list ko bulwaeyngey
  var listElem = document.querySelector("#list");

  listElem.innerHTML = ``;

  // hamarey alag alag inputs ko arrOfTodoList k ander push karwatey rahengey

  arrOfTodoList.push(inputElem.value);

  console.log(arrOfTodoList, "==>> arrOfTodoList");

  arrOfTodoList.forEach(function (todoList, index) {
    console.log(todoList, "===>> todoList");

    // hum ek naya div element create karengey
    var myDiv = document.createElement("div");
    myDiv.setAttribute("id", index);
    myDiv.innerHTML = `<p>${todoList}</p>
  <button onclick="editHandler(this)">Edit</button>
  <button onclick="deleteHandler(this)">Delete</button>`;

    //jo div naya naya banaya hai, usko listElem k ander append karwa lo
    listElem.appendChild(myDiv);
  });

  //input ko khaali karna hai
  inputElem.value = ``;
}

function deleteHandler(specificItem) {
  console.log(specificItem.parentElement, "===>> kuch huwa");
  console.log(specificItem.parentElement.id, "==>> id hai kya");
  // apni html ki list ko bulwaeyngey
  var listElem = document.querySelector("#list");

  listElem.innerHTML = ``;

  arrOfTodoList.splice(specificItem.parentElement.id, 1);

  arrOfTodoList.forEach(function (todoList, index) {
    console.log(todoList, "===>> todoList");

    // hum ek naya div element create karengey
    var myDiv = document.createElement("div");
    myDiv.setAttribute("id", index);
    myDiv.innerHTML = `<p>${todoList}</p>
  <button>Edit</button>
  <button onclick="deleteHandler(this)">Delete</button>`;

    //jo div naya naya banaya hai, usko listElem k ander append karwa lo
    listElem.appendChild(myDiv);
  });
}

function editHandler(specificItem) {
  console.log(specificItem.parentElement, "==>> kuch huwa");

  var inputElem = document.querySelector("input");

  console.log(specificItem.parentElement.children[0].innerText);
  inputElem.value = specificItem.parentElement.children[0].innerText;

  const submitBtn = document.querySelector("#submitBtn");
  submitBtn.innerText = "Edit";
  submitBtn.setAttribute("onclick", "editFieldHandler()");
}

function editFieldHandler() {
  console.log("=====>>> editFieldHandler chal raha hai");
}
