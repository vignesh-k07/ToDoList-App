const userNode = document.querySelector("#username");
const passNode = document.querySelector("#password");
const username = "admin";
const password = "12345";

function validate(callback) {
    return callback();
}

function redirect() {
    if (userNode.value == username && passNode.value == password) {
        return true;
    } else {
        alert("Incorrect Username or Password.");
        return false;
    }
}

function isSigned(){
    if (userNode.value == username && passNode.value == password) {
        return true;
    } else {
        alert("Incorrect Username or Password.");
        return false;
    }
}


