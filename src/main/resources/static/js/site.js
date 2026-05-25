console.log("Hello from JS");

// Array of user objects using working web URLs for the images
var users = [
    { name: "John Doe", gender: "Male", img: "https://www.w3schools.com/HOWTO/img_avatar.png" },
    { name: "Jane Doe", gender: "Female", img: "https://www.w3schools.com/HOWTO/img_avatar2.png" }
];

var currentUserIndex = 0;

function toggleCard() {
    // Toggles between 0 and 1 smoothly
    currentUserIndex = (currentUserIndex + 1) % 2;

    var user = users[currentUserIndex];

    // Update the DOM elements
    document.getElementById("userImage").src = user.img;
    document.getElementById("userGender").innerHTML = user.gender;
    
    // Wrapped user.name in <b> tags to keep your HTML styling intact!
    document.getElementById("userName").innerHTML = "<b>" + user.name + "</b>";
}