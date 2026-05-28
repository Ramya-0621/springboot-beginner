function displayUser(user) {
    // 1. Target by ID for the image
    document.getElementById("user-img").src = user.img;
    
    // 2. Target the <h4> using its specific ID
    document.getElementById("user-name").textContent = user.name;
    
    // 3. Target the <h5> using its specific ID
    document.getElementById("user-gender").textContent = user.gender;
}

function getAndDisplayRandomUser() {
    fetch("https://randomuser.me/api/")
       .then(function(res) {
           return res.json();
       })
       .then(function(data) {
           var user = data.results[0];
           var userObj = {};
           
           userObj.name = user.name.first + " " + user.name.last;
           userObj.gender = user.gender;
           userObj.img = user.picture.large;
           
           displayUser(userObj);
       })
       .catch(function(err) {
            console.log(err);
       });
}