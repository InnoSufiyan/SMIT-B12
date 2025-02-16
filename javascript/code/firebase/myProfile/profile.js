import { getAllPostsOfASingleUser, loginStateObserver } from "../firebase.js"

console.log("====>> jee dost hum profile page per aagaey hain")

// kya koi banda login hai ya nahin, agar hai to theek, warna utha k phenko login page per

// agar banda login hai to uski uid maloom karo

// auth observer -->> uid

const allPostsUI = document.querySelector('#allPostsUI')

let loggedInUserId;

async function starter() {
    const uid = await loginStateObserver()
    console.log(uid, "==>> uid")
    loggedInUserId = uid
    const posts = await getAllPostsOfASingleUser(loggedInUserId)
    console.log(posts, "==>> posts")

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

starter()

// getAllPosts(uid) 0-->> ab main us specific user ki, jo k login hai, us ki tamaam posts laa k apni screen per show karunga


