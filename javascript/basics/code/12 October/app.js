//

var foodMenu = ["biryani", "korma", "zinger", "pizza", "karhai"];

for (i = 0; i < foodMenu.length; i++) {
  if (foodMenu[i] == "zinger" || foodMenu[i] == "pizza") {
    continue;
  }
  console.log(foodMenu[i]);
}
