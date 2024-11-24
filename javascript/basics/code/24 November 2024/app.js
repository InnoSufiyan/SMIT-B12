const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function Package(name, price, events, discountedMonths) {
  this.name = name;
  this.price = price;
  this.events = events;
  this.discountedMonths = discountedMonths;
}

const ghareebPackage = new Package("basic", 50000, 2, [6, 7]);
const middleClassPackage = new Package("Standard", 70000, 2, [6, 7, 11]);
const ameerPackage = new Package("Premium", 99000, 2, [6, 7]);