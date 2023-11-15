var allUsers = [];
var users = localStorage.getItem("users");
var currentUser = JSON.parse(localStorage.getItem("currentUser"));


if (users !== null) {
    allUsers = JSON.parse(users);
}


if (currentUser == null) {
    
}


function logout() {
    localStorage.removeItem("currentUser");
    location.reload();
}


var userName = currentUser[0].name;
var userName1st = userName.slice(0,1).toUpperCase();
var userName2nd = userName.slice(1).toLowerCase();
userName = userName1st + userName2nd;
document.getElementById("userName").innerHTML = userName;