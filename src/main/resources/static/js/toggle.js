var users = [
    {
        name: "Joe",
        gender: "Male",
        img: "https://www.w3schools.com/HOWTO/img_avatar.png"
    },
    {
        name: "Jane Doe",
        gender: "Female",
        img: "https://www.w3schools.com/w3images/avatar2.png"
    }
];

var currentUser = 0;

function toggleUser() {
    currentUser = (currentUser === 0) ? 1 : 0;

    document.getElementById("userName").innerText = users[currentUser].name;
    document.getElementById("userGender").innerText = users[currentUser].gender;
    document.getElementById("userImage").src = users[currentUser].img;
}