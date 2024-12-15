function Bike(color, alloyRim) {
  this.tyre = 2;
  this.engine = 1;
  this.color = color;
  this.wheel = alloyRim ? "Alloy Rim" : "Steel";
  //   this.serviceTuningWashCenter = function () {
  //     console.log("dhuley gi aur chamkeygi aur saath maintenance bhi hojaeyga");
  //   };
}   

Bike.prototype.serviceTuningWashCenter = function () {
  console.log("dhuley gi aur chamkeygi aur saath maintenance bhi hojaeyga");
};

const bike1 = new Bike("black", true);
const bike2 = new Bike("red", false);

Bike.selfStart = true;

const bike3 = new Bike("green", true);
