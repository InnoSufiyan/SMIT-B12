const users = [
  {
    name: "Ali Khan",
    pictureUrl:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    jobDescription: "Software Engineer",
    review: "Great at problem-solving and very dedicated.",
  },
  {
    name: "Sara Ahmed",
    pictureUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqDztr9VCk90qMMMJKOstI8UpnMfSmX21A3w&s",
    jobDescription: "Product Manager",
    review: "Excellent communication skills and a natural leader.",
  },
  {
    name: "Hamid Raza",
    pictureUrl:
      "https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=",
    jobDescription: "UX/UI Designer",
    review: "Creative and always brings fresh ideas to the table.",
  },
  {
    name: "Fatima Noor",
    pictureUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQggS2JD0CsqsOA9xR_ECwtNICAzRWcL5wG-A&s",
    jobDescription: "Data Analyst",
    review: "Detail-oriented and provides valuable insights.",
  },
  {
    name: "Zain Malik",
    pictureUrl:
      "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",
    jobDescription: "Web Developer",
    review: "Skilled in multiple programming languages and very reliable.",
  },
];

let count = 0;

document.querySelector("#image").src = users[count].pictureUrl;
document.querySelector("#name").innerHTML = users[count].name;
document.querySelector("#description").innerHTML = users[count].jobDescription;
document.querySelector("#review").innerHTML = users[count].review;

function previousHandler() {
  console.log(count, "==>>count");
  if (count == 0) {
    count = users.length - 1;
  } else {
    count--;
  }
  document.querySelector("#image").src = users[count].pictureUrl;
  document.querySelector("#name").innerHTML = users[count].name;
  document.querySelector("#description").innerHTML =
    users[count].jobDescription;
  document.querySelector("#review").innerHTML = users[count].review;
}
function nextHandler() {
  console.log(count, "==>>count");
  if (count >= users.length - 1) {
    count = 0;
  } else {
    count++;
  }
  document.querySelector("#image").src = users[count].pictureUrl;
  document.querySelector("#name").innerHTML = users[count].name;
  document.querySelector("#description").innerHTML =
    users[count].jobDescription;
  document.querySelector("#review").innerHTML = users[count].review;
}
