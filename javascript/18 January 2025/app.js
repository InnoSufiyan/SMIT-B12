const button = document.querySelector("button");

const student1 = {
  name: "Abdullah",
  attendence: 0,
  calculateAttendence: () => {
    this.attendence++;
  },
};

button.addEventListener("click", student1.calculateAttendence.bind(student1));
button.addEventListener("click", student1.calculateAttendence.call(student4));
