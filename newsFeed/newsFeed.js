let profilePicture = document.getElementById("profile-pic");
let uploadProfilePicture = document.getElementById("upload-profile-pic");
let postProfilePic = document.getElementById("post-profile-pic"); //find solution to change every profile pic
const textArea = document.getElementById("text-area");

const uploadContent = document.querySelector(".upload-content");
const postBtn = document.querySelector(".post-btn");

const content = document.getElementById("content");
content.style.display = "grid";
content.style.gap = "30px";

let postArray = JSON.parse(localStorage.getItem("postArray")) || [];

uploadProfilePicture.onchange = function () {
  profilePicture.src = URL.createObjectURL(uploadProfilePicture.files[0]);
  postProfilePic.src = profilePicture.src;
};

function onShow() {
  textArea.classList.remove("hide");
  postBtn.classList.remove("hide");
  uploadContent.style.width = "50%";
}

postBtn.addEventListener("click", () => {
  textArea.classList.add("hide");
  postBtn.classList.add("hide");
  uploadContent.style.width = "100%";

  function createPost() {}
  let post = document.createElement("div");
  let postText = document.createElement("p");
  let postDetails = document.createElement("div");
  let postProfileImage = document.createElement("img");
  let postNameDiv = document.createElement("div");
  let postName = document.createElement("h4");
  let postTime = document.createElement("p");
  let postDelete = document.createElement("img");
  let profileDetails = document.createElement("div");

  postDetails.className = "post-details";

  profileDetails.className = "post-profile-details";

  postName.className = "post-name";

  postTime.classList = "post-time";

  postText.className = "post-text";

  postText.innerHTML = textArea.value;
  console.log(postText);

  post.className = "post";

  postProfileImage.src =
    "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png";
  postProfileImage.className = "post-profileImage";

  postName.innerHTML = "genadi";

  function displayTime() {
    const currentTime = new Date();

    const uploadTime = new Date();

    const timeDifference = currentTime - uploadTime;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    let elapsedTime = "";
    if (days > 0) {
      elapsedTime = days + " days ago";
    } else if (hours > 0) {
      elapsedTime = hours + " hours ago";
    } else if (minutes > 0) {
      elapsedTime = minutes + " minutes ago";
    } else {
      elapsedTime = seconds + " seconds ago";
    }

    postTime.innerHTML = "Post uploaded " + elapsedTime;
  }

  displayTime();

  let postInformation = {
    postContent: postText.innerHTML,
  };
  postArray.push(postInformation);
  localStorage.setItem("postArray", JSON.stringify(postArray));

  console.log(postArray);

  textArea.value = "";

  profileDetails.append(postProfileImage);
  profileDetails.append(postNameDiv);

  postDelete.src = "https://www.svgrepo.com/show/365893/x-thin.svg";
  postDelete.className = "delete-post";
  postDetails.append(profileDetails);
  postNameDiv.append(postName);
  postNameDiv.append(postTime);
  postDetails.append(postDelete);
  post.append(postDetails);
  post.append(postText);
  content.append(post);
});

postArray.forEach((el) => {
  let post = document.createElement("div");
  let postText = document.createElement("p");
  let postDetails = document.createElement("div");
  let postProfileImage = document.createElement("img");
  let postNameDiv = document.createElement("div");
  let postName = document.createElement("h4");
  let postTime = document.createElement("p");
  let postDelete = document.createElement("img");
  let profileDetails = document.createElement("div");

  postDetails.className = "post-details";

  profileDetails.className = "post-profile-details";

  postName.className = "post-name";

  postTime.classList = "post-time";

  postText.className = "post-text";

  postText.innerHTML = el.postContent;

  post.className = "post";

  postProfileImage.src =
    "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png";
  postProfileImage.className = "post-profileImage";

  postName.innerHTML = "genadi";

  function displayTime() {
    const currentTime = new Date();

    const uploadTime = new Date();

    const timeDifference = currentTime - uploadTime;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    let elapsedTime = "";
    if (days > 0) {
      elapsedTime = days + " days ago";
    } else if (hours > 0) {
      elapsedTime = hours + " hours ago";
    } else if (minutes > 0) {
      elapsedTime = minutes + " minutes ago";
    } else {
      elapsedTime = seconds + " seconds ago";
    }

    postTime.innerHTML = "Post uploaded " + elapsedTime;
  }

  displayTime(postTime);

  profileDetails.append(postProfileImage);
  profileDetails.append(postNameDiv);

  postDelete.src = "https://www.svgrepo.com/show/365893/x-thin.svg";
  postDelete.className = "delete-post";
  postDetails.append(profileDetails);
  postNameDiv.append(postName);
  postNameDiv.append(postTime);
  postDetails.append(postDelete);
  post.append(postDetails);
  post.append(postText);
  content.append(post);
});

//Tasks

//1. find solution to change every profile pic
//2. store profile pic in local storage
//3. Do so that you can upload photoes in text area
//4. Save pictures uploaded to text area into local storage
//5. Do likes and comments
//6. Store likes and comments in local storage
//7. Make so that everything is displayed upon loging in
//8. Work on the visual side
//9. Do so that user name is correct
//10.Store user name in local storage when creatin account
//11. Modify upload time
//12.onDelete remove post from local storage
//1.recheck everything
