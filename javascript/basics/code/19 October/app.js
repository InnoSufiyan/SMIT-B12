// const students = [
//   {
//     id: 1,
//     name: "Sufiyan",
//     score: 80,
//     favourite: "English",
//   },
//   {
//     id: 2,
//     name: "Salman",
//     score: 85,
//     favourite: "Physics",
//   },
//   {
//     id: 3,
//     name: "Suleman",
//     score: 70,
//     favourite: "Chemistry",
//   },
//   {
//     id: 4,
//     name: "Wasi",
//     score: 90,
//     favourite: "English",
//   },
//   {
//     id: 5,
//     name: "Ahtasham",
//     score: 80,
//     favourite: "Urdu",
//   },
// ];

// console.log(students, "==>> students");

// const updatedStudents = students.map(function (std) {
//   return {
//     ...std,
//     role: "Student",
//   };
// });

// console.log(updatedStudents, "==>> updatedStudents");

// const highScores = students.filter(function (student) {
//   if (student.score >= 80) {
//     return true;
//   }
// });

// console.log(highScores, "==>>highScores");

// const specificStudent = students.find(function (std) {
//   if (std.id == 4) {
//     return true;
//   }
// });

// console.log(specificStudent, "==>>specificStudent");

// // const newUpdatedStudents = students.map(function (student) {
// //   if (student.id == 3) {
// //     student.favourite = "Maths";
// //   }
// //   return student;
// // });

// // console.log(newUpdatedStudents, "==>> newUpdatedStudents");

// const specificStudentForSubjectChange = students.find(function (student) {
//   if (student.id == 3) return true;
// });

// console.log(specificStudentForSubjectChange);

// specificStudentForSubjectChange.favourite = "Maths";

// console.log(students, "==>>students");

const rishtedaar = [
  {
    name: "mamu",
    paisa: 500,
  },
  {
    name: "khala",
    paisa: 5000,
  },
  {
    name: "chachu",
    paisa: 1500,
  },
  {
    name: "phuppo",
    paisa: 100,
  },
];

const totalPaisa = rishtedaar.reduce(function (total, currentValue) {
  console.log(total, "==>>total");
  console.log(currentValue, "==>>currentValue");

  return (total += currentValue.paisa);
}, 5000);

console.log(totalPaisa, "==>> totalPaisa");
