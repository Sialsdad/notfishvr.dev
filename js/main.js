var allUsers = [];
var users = localStorage.getItem("users");
var currentUser = localStorage.getItem("currentUser");

if (users !== null) {
    allUsers = JSON.parse(users);
}

function login() {
    var password = document.querySelector("#lname").value;
    var name = document.querySelector("#lpass").value;
    var errorPara = document.querySelector("#errorPara");
    
    if (name == "") {
        errorPara.innerHTML = "Please fill the name input!";
        setTimeout(() => {
            errorPara.innerHTML = "";
        }, 4000);
    }
    else if (password == "") {
        errorPara.innerHTML = "Please fill the password input!";
        setTimeout(() => {
            errorPara.innerHTML = "";
        }, 4000);
    } else {
        var filterUser = allUsers.filter(function (data) {
            return data.name == name && data.password == password;
        });

        if (filterUser.length) {
            localStorage.setItem("currentUser", JSON.stringify(filterUser));
            location.href = "../index.html";
        } else {
            alert("no work");
        }
    }
}

function makeacc() {
    var name = document.querySelector("#sname").value;
    var password = document.querySelector("#spass").value;
    var errorPara = document.querySelector("#errorPara");

    if (name == "" && password == "") {
        errorPara.innerHTML = "Please fill all the inputs!";
        setTimeout(() => {
            errorPara.innerHTML = "";
        }, 4000);
    } else if (name == "") {
        errorPara.innerHTML = "Please fill the name input!";
        setTimeout(() => {
            errorPara.innerHTML = "";
        }, 4000);
    } else if (password == "") {
        errorPara.innerHTML = "Please fill the password input!";
        setTimeout(() => {
            errorPara.innerHTML = "";
        }, 4000);
    } else {

        var singleData = {
            name: name,
            password: password
        }

        allUsers.push(singleData);
        localStorage.setItem("users", JSON.stringify(allUsers));
        document.querySelector("#sname").value = "";
        document.querySelector("#spass").value = "";
    }
}