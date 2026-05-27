var users = [

    {
        name : "Joe",
        gender : "Male",
        img : "https://www.w3schools.com/howto/img_avatar.png"
    },

    {
        name : "Jane",
        gender : "Female",
        img : "https://www.w3schools.com/w3images/avatar2.png"
    }

];

var currentUser = 0;

function toggleCard(){

    currentUser = (currentUser + 1) % users.length;

    document.getElementById("userName").innerHTML =
    users[currentUser].name;

    document.getElementById("userGender").innerHTML =
    users[currentUser].gender;

    document.getElementById("userImage").src =
    users[currentUser].img;
}