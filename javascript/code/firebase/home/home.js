import {
  loginStateObserver,
  getSingleDocument,
  signout,
  updateProfile,
} from "../firebase.js";

const profilePictureHTML = document.querySelector("#profilePicture");
const completeNameHTML = document.querySelector("#completeName");
const descriptionHTML = document.querySelector("#description");
const emailHTML = document.querySelector("#email");
const logoutBtn = document.querySelector("#logoutBtn");
const descriptionModalHtml = document.querySelector("#descriptionModalHtml");
const profilePictureUrlHtml = document.querySelector("#profilePictureUrlHtml");
const updateProfileBtn = document.querySelector("#updateProfileBtn");

let loggedInUserId;
let loggedInUserDetails;

async function starter() {
  console.log("Salaam");
  const uid = await loginStateObserver();
  console.log(uid, "==>> uid");
  loggedInUserId = uid;

  // database k pass jao, aur login waley banday ki uid se, data le kar aao..
  const { firstName, lastName, userName, email, description, profilePicture } =
    await getSingleDocument(uid);

  loggedInUserDetails = {
    firstName,
    lastName,
    userName,
    email,
    description,
    profilePicture,
  };

  completeNameHTML.innerHTML = `${firstName} ${lastName}`;
  descriptionHTML.innerHTML = description ?? "No Description Added";
  emailHTML.innerHTML = email ?? "No Email Added";
  profilePictureHTML.src =
    profilePicture ?? "https://avatar.iran.liara.run/public/15";
  descriptionModalHtml.value = description || "";
  profilePictureUrlHtml.value = profilePicture || "";
}

starter();

logoutBtn.addEventListener("click", () => {
  console.log("===>> logout honey jaa raha hai");
  signout();
});

updateProfileBtn.addEventListener("click", () => {
  console.log("==>> profile update karney jaa raha hun..");
  updateProfile(
    descriptionModalHtml.value,
    profilePictureUrlHtml.value,
    loggedInUserId,
    loggedInUserDetails
  );
});
