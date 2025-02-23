import {
  loginStateObserver,
  getSingleDocument,
  signout,
  updateProfile,
  addASingleDocumentWithoutGivingUniqueId,
  getAllPostsFromFirestore,
  deleteFromFireStore,
  updatePostFromFirebase,
} from "../sufiyan.js";
import { cloudName, uploadPreset } from "../secret.js";

const profilePictureHTML = document.querySelector("#profilePicture");
const completeNameHTML = document.querySelector("#completeName");
const descriptionHTML = document.querySelector("#description");
const emailHTML = document.querySelector("#email");
const logoutBtn = document.querySelector("#logoutBtn");
const descriptionModalHtml = document.querySelector("#descriptionModalHtml");
const profilePictureInputHtml = document.querySelector("#profilePictureInputHtml");
const updateProfileBtn = document.querySelector("#updateProfileBtn");
const postBtn = document.querySelector("#postBtn");
const postDataInputHtml = document.querySelector("#postDataInputHtml");
const postFileInputHtml = document.querySelector("#postFileInputHtml");
const allPostsUI = document.querySelector("#allPostsUI");

let loggedInUserId;
let loggedInUserDetails;

let updatePostId;

// functionality for editing a post
function editHandler(postId, singlePost) {

  console.log(postId, "====>> main edit karunga")
  const postUid = postId.split('-')[1]

  updatePostId = postUid

  //open a modal to edit post
  console.log(singlePost.parentElement.parentElement.parentElement.nextElementSibling.src, "==>> singlePost")
  document.querySelector('#postModalHtml').value = singlePost.parentElement.parentElement.nextElementSibling.innerHTML.trim()

  document.querySelector('#postImgUpdate').src = singlePost.parentElement.parentElement.parentElement.nextElementSibling.src

}

// Update Post functionality

async function updatePost() {
  console.log("====>>> updatePost")

  // firebase k function ko updatePostId with updated data de dena hai

  // updated data , aao zara dom se nikaltey hain
  const updatePostText = document.querySelector('#postModalHtml').value
  let updatePostPictureUrl;
  const file = document.querySelector('#postFileHtml').files[0]

  console.log(updatePostText, "===>>updatePostText")
  console.log(file, "===>>file")

  if (!file) {
    updatePostPictureUrl = document.querySelector('#postImgUpdate').src
  } else {
    // Create a FormData object to hold the file
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    console.log(uploadPreset, "==>> uploadPreset")

    // Cloudinary upload URL
    const uploadURL = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;


    const data = await fetch(uploadURL, {
      method: 'POST',
      body: formData
    })

    const dataJSON = await data.json()

    console.log(dataJSON, "==>> dataJSON")

    updatePostPictureUrl = dataJSON.secure_url
  }

  updatePostFromFirebase(updatePostId, {
    data: updatePostText,
    pictureUrl: updatePostPictureUrl,
    creatorUid: loggedInUserId,
    creatorDetails: loggedInUserDetails,
  })
}

// update post save btn

document.querySelector('#updatePostBtn').addEventListener('click', updatePost)

// functionality for deleting a post
function deleteHandler(postId) {
  console.log(postId, "====>> main edit karunga")
  const postUid = postId.split('-')[1]
  deleteFromFireStore(postUid)
}

async function getAllPosts() {
  const posts = await getAllPostsFromFirestore(); // mujhey yahan tamaam posts le kar aani hain, firebase ki file k ander se
  console.log(posts, "==>> firebase se posts mil gai hain home page k ander")

  const postsData = posts.map((singlePost) => {
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
        ${singlePost.creatorUid == loggedInUserId ? `<div class="buttons">
          <button data-bs-toggle="modal" data-bs-target="#postStaticBackdrop" id=edit-${singlePost.id} class="editBtn">Edit</button>
          <button id=delete-${singlePost.id} class="deleteBtn">Delete</button>
        </div>` : ``
      }
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

  const allPostsForEdit = document.querySelectorAll('.editBtn')
  const allPostsForDelete = document.querySelectorAll('.deleteBtn')

  console.log(allPostsForEdit, "==> allPostsForEdit")

  allPostsForEdit.forEach((singlePost) => {
    console.log(singlePost.id, "==>> singlePost")
    singlePost.addEventListener('click', () => { editHandler(singlePost.id, singlePost) })
  })

  allPostsForDelete.forEach((singlePost) => {
    console.log(singlePost.id, "==>> singlePost")
    singlePost.addEventListener('click', () => { deleteHandler(singlePost.id) })
  })
}

getAllPosts();

console.log("====>> getAll Posts console.log horaha hai")





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
  profilePictureInputHtml.value = profilePicture || "";
}

starter();

logoutBtn.addEventListener("click", () => {
  console.log("===>> logout honey jaa raha hai");
  signout();
});

updateProfileBtn.addEventListener("click", async () => {
  console.log("==>> profile update karney jaa raha hun..");

  const file = profilePictureInputHtml.files[0];

  console.log(file, "===>>> file")

  if (!file) {
    alert("Please select a file.");
    return;
  }

  // Create a FormData object to hold the file
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  // Cloudinary upload URL
  const uploadURL = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  // GET, PUT / PATCH, POST, DELETE
  // Get -> to receive data
  // Post -> to send data
  // Put / PATCH -> to update data
  // Delete -> to delete data

  try {
    // Perform the upload request
    const data = await fetch(uploadURL, {
      method: 'POST',
      body: formData // picture, uploadPreset
    })

    const dataJSON = await data.json()

    console.log(dataJSON, "==>> dataJSON")

    updateProfile(
      descriptionModalHtml.value,
      dataJSON.secure_url,
      loggedInUserId,
      loggedInUserDetails
    );

  } catch (error) {
    console.log(error)
  }

  return


});

async function savePost() {

  const file = postFileInputHtml.files[0]


  console.log(
    "==>> kisi ney kuch save karney ki koshish ki",
    postDataInputHtml.value,
    loggedInUserId,
    loggedInUserDetails,
    file
  );

  // Create a FormData object to hold the file
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  console.log(uploadPreset, "==>> uploadPreset")

  // Cloudinary upload URL
  const uploadURL = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;


  const data = await fetch(uploadURL, {
    method: 'POST',
    body: formData
  })

  const dataJSON = await data.json()

  console.log(dataJSON, "==>> dataJSON")

  addASingleDocumentWithoutGivingUniqueId({
    data: postDataInputHtml.value,
    pictureUrl: dataJSON.secure_url,
    creatorUid: loggedInUserId,
    creatorDetails: loggedInUserDetails,
  });
}

postBtn.addEventListener("click", savePost);
