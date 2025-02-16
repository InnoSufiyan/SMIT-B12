import {
  loginStateObserver,
  getSingleDocument,
  signout,
  updateProfile,
  addASingleDocumentWithoutGivingUniqueId,
  getAllPostsFromFirestore,
} from "../firebase.js";

const profilePictureHTML = document.querySelector("#profilePicture");
const completeNameHTML = document.querySelector("#completeName");
const descriptionHTML = document.querySelector("#description");
const emailHTML = document.querySelector("#email");
const logoutBtn = document.querySelector("#logoutBtn");
const descriptionModalHtml = document.querySelector("#descriptionModalHtml");
const profilePictureUrlHtml = document.querySelector("#profilePictureUrlHtml");
const updateProfileBtn = document.querySelector("#updateProfileBtn");
const postBtn = document.querySelector("#postBtn");
const postDataInputHtml = document.querySelector("#postDataInputHtml");
const postUrlInputHtml = document.querySelector("#postUrlInputHtml");
const allPostsUI = document.querySelector("#allPostsUI");

async function getAllPosts() {
  const posts = await getAllPostsFromFirestore(); // mujhey yahan tamaam posts le kar aani hain, firebase ki file k ander se
  console.log(posts, "==>> firebase se posts mil gai hain home page k ander")

  const postsData = posts.map((singlePost)=> {
    return `
    <div class="card">
        <div class="card-body">
          <div style="display: flex; justify-content: space-between;">

          <div style="display: flex; align-items: center; gap: 20px;">
          <div id="profilePictureInPostUI">
            <img src="${singlePost.creatorDetails.profilePicture}" alt="">
          </div>
          <h5 class="card-title">${singlePost.creatorDetails.userName}</h5>
        </div>
        <div class="buttons">
          <button id="editBtn">Edit</button>
          <button id="deleteBtn">Delete</button>
        </div>
      </div>
      <p class="card-text">
        ${singlePost.data}
      </p>
      <p class="card-text">
        <small class="text-body-secondary"
          >Last updated 3 mins ago</small
        >
      </p>
    </div>
    <img src="${singlePost.pictureUrl}" class="card-img-bottom" alt="..." />
  </div>
    `
  })

  console.log(postsData, "==>> postsData")

  allPostsUI.innerHTML = postsData.join('')
} 

getAllPosts();

console.log("====>> getAll Posts console.log horaha hai")



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

function savePost() {
  console.log(
    "==>> kisi ney kuch save karney ki koshish ki",
    postDataInputHtml.value,
    postUrlInputHtml.value,
    loggedInUserId,
    loggedInUserDetails
  );

  addASingleDocumentWithoutGivingUniqueId({
    data: postDataInputHtml.value,
    pictureUrl: postUrlInputHtml.value,
    creatorUid: loggedInUserId,
    creatorDetails: loggedInUserDetails,
  });
}

postBtn.addEventListener("click", savePost);
