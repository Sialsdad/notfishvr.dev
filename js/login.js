var allUsers = [];
var users = localStorage.getItem("users");
var currentUser = localStorage.getItem("currentUser");


if (users !== null) {
    allUsers = JSON.parse(users);
}



function login() {
    var email = document.querySelector("#lemail").value;
    var password = document.querySelector("#lpass").value;
    var errorPara = document.querySelector("#errorPara");

    if (email == "" && password == "") {
        errorPara.innerHTML = "Please fill all the inputs!";
        setTimeout(() => {
            errorPara.innerHTML = "";
        }, 4000);
    } else if (email == "") {
        errorPara.innerHTML = "Please fill the email input!";
        setTimeout(() => {
            errorPara.innerHTML = "";
        }, 4000);
    } else if (password == "") {
        errorPara.innerHTML = "Please fill the password input!";
        setTimeout(() => {
            errorPara.innerHTML = "";
        }, 4000);
    } else {


        var filterUser = allUsers.filter(function (data) {
            return data.email == email && data.password == password && data.name
        });
        if (filterUser.length) {
            localStorage.setItem("currentUser", JSON.stringify(filterUser));
            location.href = "../index.html"
        } else {
            alert("Please signup first!");
            location.href = "../signup/signup.html";
        }
    }
}