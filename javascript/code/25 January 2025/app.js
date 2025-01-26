import { add } from "./calculator.js";

// import { doctors } from "./doctors.js";
const result = add(5, 7);

console.log(result, "==>> result");

{
  /* <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Designation</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Company Name</h6>
            <p class="card-text">Salary</p>
            <a href="#" class="card-link">City</a>
            <a href="#" class="card-link">Country</a>
          </div>
        </div> */
}

const jobsCardSection = document.querySelector("#jobsCardSection");
const categoriesCardSection = document.querySelector("#categoriesCardSection");

// fetch(
//   "https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=&isPending=false"
// )
//   .then((result) => {
//     console.log(result, "===> result");
//     return result.json();
//   })
//   .then((result) => {
//     console.log(result, "===>> result dusri dafa");
//     const jobsDetails = result.data.map((job) => {
//       return `
//       <div class="card" style="width: 18rem">
//       <div class="card-body">
//         <h5 class="card-title">${job.designation}</h5>
//         <h6 class="card-subtitle mb-2 text-body-secondary">${
//           job.companyName
//         }</h6>
//         <p class="card-text">${
//           job.payRangeEnd === 0
//             ? `No Salary Mentioned`
//             : `Salary : ${job.payRangeStart} - ${job.payRangeEnd}`
//         } </p>
//         <a href="#" class="card-link">${job.city || `No City Mentioned`}</a>
//         <a href="#" class="card-link">${job.country}</a>
//       </div>
//     </div>
//       `;
//     });
//     console.log(jobsDetails, "==>> jobsDetails");
//     jobsCardSection.innerHTML = jobsDetails.join("");
//   })
//   .catch((err) => {
//     console.log(err, "===>>> err");
//   });

async function jobsAddition() {
  jobsCardSection.innerHTML =
    '<img src= "https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952ywpq34amc9vodtbbpmdetxfvh50p191yp09f4tgm&ep=v1_gifs_search&rid=200w.gif&ct=g" />';
  try {
    const jobs = await fetch(
      "https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=&isPending=false"
    );
    console.log("===>>dadadad");
    const jobsJSON = await jobs.json();
    const jobsDetails = jobsJSON.data.map((job) => {
      return `
    <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">${job.designation}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${job.companyName}</h6>
      <p class="card-text">${
        job.payRangeEnd === 0
          ? `No Salary Mentioned`
          : `Salary : ${job.payRangeStart} - ${job.payRangeEnd}`
      } </p>
      <a href="#" class="card-link">${job.city || `No City Mentioned`}</a>
      <a href="#" class="card-link">${job.country}</a>
    </div>
  </div>
    `;
    });
    jobsCardSection.innerHTML = jobsDetails.join("");
  } catch (error) {
    console.log(error, "==>> error");
  }
}

jobsAddition();

// fetch(`https://backend-prod.app.hiringmine.com/api/categories/all`)
//   .then((categories) => {
//     return categories.json();
//   })
//   .then((categories) => {
//     console.log(categories, "==>> categories");
//     const categoriesDetails = categories.data.slice(0, 8).map((category) => {
//       return `
//         <div class="card" style="width: 18rem">
//         <div class="card-body">
//           <h5 class="card-title">${category.name}</h5>
//           <h6 class="card-subtitle mb-2 text-body-secondary">Job Count: ${category.postCounts}</h6>
//         </div>
//       </div>
//         `;
//     });
//     categoriesCardSection.innerHTML = categoriesDetails.join("");
//   })
//   .catch((err) => {
//     // console.log(err, "==>> err");
//     alert(err);
//   });

async function categoriesFetch() {
  categoriesCardSection.innerHTML = `<img src = "https://cdn.pixabay.com/animation/2023/11/30/10/11/10-11-02-622_512.gif" />`;
  try {
    const categories = await fetch(
      `https://backend-prod.app.hiringmine.com/api/categories/all`
    );
    const categoriesJSON = await categories.json();
    const categoriesDetails = categoriesJSON.data
      .slice(0, 8)
      .map((category) => {
        return `
        <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${category.name}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Job Count: ${category.postCounts}</h6>
        </div>
      </div>
        `;
      });
    categoriesCardSection.innerHTML = categoriesDetails.join("");
  } catch (error) {
    console.log(error, "==>> error");
  }
}

categoriesFetch();

// const value = false;
// const waada = new Promise((resolve, reject) => {
//   if (value == true) {
//     setTimeout(() => resolve("Waadaa pura huwa"), 10000);
//   } else {
//     setTimeout(()=> reject("Waadaa reject huwa"), 10000)
//   }
// });

// waada
//   .then((response) => {
//     console.log(response, "==>> response");
//   })
//   .catch((err) => {
//     console.log(err, "===>> err");
//   });

const getPosition = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition()
  .then(async (response) => {
    console.log(response, "==>> response");
    const { coords } = response;
    const { latitude, longitude } = coords;
    console.log(latitude, "==>> latitude");
    console.log(longitude, "==>> longitude");
    const location = await fetch(
      `https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=802447184335778970346x7085`
    );
    const locationJSON = await location.json();
    console.log(locationJSON, "==>> locationJSON");
  })
  .catch((err) => {
    console.log(err, "==>> err");
  });
