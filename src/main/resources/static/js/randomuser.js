function displayUser(user) {
    document.querySelector("img").src = user.img;
    document.querySelector("h3").textContent = user.name;
    document.querySelectorAll("h3")[1].textContent = user.gender;
}

function getAndDisplayRandomUser() {
    fetch("https://randomuser.me/api/")
       .then(function(res) {
           return res.json();
       })
       .then(function(data) {
           var user = data.results[0];
           
           // 1. Create the object
           var userObj = {};
           
           // 2. FIXED: Use userObj consistently here
           userObj.name = user.name.first + " " + user.name.last;
           userObj.gender = user.gender;
           userObj.img = user.picture.large;
           
           // 3. Pass it to your display function
           displayUser(userObj);
       })
       .catch(function(err) {
            console.log(err);
       });
}