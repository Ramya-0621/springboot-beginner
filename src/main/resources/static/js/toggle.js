var currentUserIndex = 1;
var userArray = [
    { name: "John Doe", gender: "Male", img: "https://www.w3schools.com/HOWTO/img_avatar.png" },
    { name: "Jane Doe", gender: "Female", img: "https://www.w3schools.com/HOWTO/img_avatar2.png" }
];

function toggleUser() {
    // 1. Flip the index
    currentUserIndex = 1 - currentUserIndex;
    var nextuser = userArray[currentUserIndex];
    
    // 2. Call the display function to actually update the screen
    displayUser(nextuser);
}
function displayUser(user) {
    document.querySelector("img").src = user.img;
    document.querySelector("h3").textContent = user.name;
    document.querySelectorAll("h3")[1].textContent = user.gender; 
}