var allUsers = [];
var users = localStorage.getItem("users");
var currentUser = localStorage.getItem("currentUser");

if (users !== null) {
    allUsers = JSON.parse(users);
}

function generateHWID() {
    // This is a basic example; you might need to enhance it for better uniqueness.
    return navigator.userAgent + navigator.platform;
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
    } else if (password == "") {
        errorPara.innerHTML = "Please fill the password input!";
        setTimeout(() => {
            errorPara.innerHTML = "";
        }, 4000);
    } else {
        fetch('https://api64.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                var userIP = data.ip;
                var storedIP = localStorage.getItem("userIP");
                var storedHWID = localStorage.getItem("userHWID");

                if ((storedIP === null || storedIP === userIP) && (storedHWID === null || storedHWID === generateHWID())) {
                    var filterUser = allUsers.filter(function (data) {
                        return data.name == name && data.password == password;
                    });

                    if (filterUser.length) {
                        localStorage.setItem("userIP", userIP);
                        localStorage.setItem("userHWID", generateHWID());
                        localStorage.setItem("currentUser", JSON.stringify(filterUser));
                        location.href = "../index.html";
                    } else {
                        alert("Invalid username or password");
                    }
                } else {
                    alert("Access denied. IP address or HWID mismatch.");
                }
            })
            .catch(error => {
                console.error('Error fetching IP address:', error);
            });
    }
}
