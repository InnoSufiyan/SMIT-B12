const foodMenu = [
  {
    name: "biryani",
    price: 250,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaF6-1Auf1DuOXo9FhalxTrx1j-BnkoOu4A&s",
    type: "lunch",
  },
  {
    name: "korma",
    price: 200,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2EHu1pxhzP5pCI4nDyQ2VC1U09oa79dSyA&s",
    type: "lunch",
  },
  {
    name: "daal chawal",
    price: 150,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHIEnKPsNPAE9EwAdDJUGpaEcrZF16p7bqVQ&s",
    type: "lunch",
  },
  {
    name: "anda paratha",
    price: 100,
    img: "https://i.ytimg.com/vi/pbIu7LxuAQM/maxresdefault.jpg",
    type: "breakfast",
  },
  {
    name: "halwa puri",
    price: 150,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqzh4aUSV4iZH9jkpx4SSg8OtOufizg_uowQ&s",
    type: "breakfast",
  },
  {
    name: "strawberry shakes",
    price: 100,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiYLuhalzJ57iCVsVJsIOnHgAtjYUQ-GUMPw&s",
    type: "shakes",
  },
  {
    name: "banana shakes",
    price: 150,
    img: "https://img.freepik.com/premium-photo/healthy-fruit-vegetable-smoothies_1031776-40220.jpg",
    type: "shakes",
  },
  {
    name: "mango shakes",
    price: 200,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRU-GCECfpq1lYXDhMPaOBYw7kfGu2FY6Wg&s",
    type: "shakes",
  },
  {
    name: "sugarcane",
    price: 50,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN9OckXTjVhSNsMpqnGXKfgGqRyzqjc1JUUw&s",
    type: "shakes",
  },
  {
    name: "nihari",
    price: 200,
    img: "https://www.shutterstock.com/image-photo/beef-nihari-260nw-60913849.jpg",
    type: "lunch",
  },
  {
    name: "paaey",
    price: 250,
    img: "https://i.ytimg.com/vi/vibjjhqtACI/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAIAYGRgg9bhuvyhKo1IygYcdqlAQ",
    type: "lunch",
  },
];

const buttons = [
  {
    title: "All",
    fn: "allItems()",
  },
  {
    title: "Breakfast",
    fn: "breakFastItems()",
  },
  {
    title: "Lunch",
    fn: "lunchItems()",
  },
  {
    title: "Shakes",
    fn: "shakesItems()",
  },
];

buttons.forEach(function (btn) {
  const button = document.createElement("button");
  button.innerText = btn.title;
  button.setAttribute("onclick", btn.fn);
  document.querySelector("#buttonGroup").appendChild(button);
});

foodMenu.forEach(function (foodItem) {
  const card = document.createElement("div");
  card.setAttribute("id", foodItem.name);
  card.classList.add("card");
  card.innerHTML = `<img
  src=${foodItem.img}
  class="card-img-top"
  alt="..."
/>
<div class="card-body">
  <h5 class="card-title">${foodItem.name}</h5>
  <p class="card-text">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
    beatae quod! Reprehenderit aut aliquam veniam numquam, deleniti
    impedit itaque veritatis.
  </p>
  <a href="#" class="btn btn-primary">${foodItem.price}</a>
</div>`;
  document.querySelector("#foodItems").appendChild(card);
});

function breakFastItems() {
  console.log("breakfastItems");
  document.querySelector("#foodItems").innerHTML = ``;
  foodMenu
    .filter(function (foodItem) {
      return foodItem.type == "breakfast";
    })
    .forEach(function (foodItem) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `<img
    src=${foodItem.img}
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">${foodItem.name}</h5>
    <p class="card-text">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
      beatae quod! Reprehenderit aut aliquam veniam numquam, deleniti
      impedit itaque veritatis.
    </p>
    <a href="#" class="btn btn-primary">${foodItem.price}</a>
  </div>`;
      document.querySelector("#foodItems").appendChild(card);
    });
}

function lunchItems() {
  document.querySelector("#foodItems").innerHTML = ``;
  foodMenu
    .filter(function (foodItem) {
      return foodItem.type == "lunch";
    })
    .forEach(function (foodItem) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `<img
    src=${foodItem.img}
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">${foodItem.name}</h5>
    <p class="card-text">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
      beatae quod! Reprehenderit aut aliquam veniam numquam, deleniti
      impedit itaque veritatis.
    </p>
    <a href="#" class="btn btn-primary">${foodItem.price}</a>
  </div>`;
      document.querySelector("#foodItems").appendChild(card);
    });
}

function shakesItems() {
  document.querySelector("#foodItems").innerHTML = ``;
  foodMenu
    .filter(function (foodItem) {
      return foodItem.type == "shakes";
    })
    .forEach(function (foodItem) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `<img
      src=${foodItem.img}
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">${foodItem.name}</h5>
      <p class="card-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
        beatae quod! Reprehenderit aut aliquam veniam numquam, deleniti
        impedit itaque veritatis.
      </p>
      <a href="#" class="btn btn-primary">${foodItem.price}</a>
    </div>`;
      document.querySelector("#foodItems").appendChild(card);
    });
}
function allItems() {
  document.querySelector("#foodItems").innerHTML = ``;
  foodMenu.forEach(function (foodItem) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<img
      src=${foodItem.img}
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">${foodItem.name}</h5>
      <p class="card-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
        beatae quod! Reprehenderit aut aliquam veniam numquam, deleniti
        impedit itaque veritatis.
      </p>
      <a href="#" class="btn btn-primary">${foodItem.price}</a>
    </div>`;
    document.querySelector("#foodItems").appendChild(card);
  });
}
