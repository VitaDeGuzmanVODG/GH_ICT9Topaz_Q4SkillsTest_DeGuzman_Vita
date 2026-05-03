// LOGIN FUNCTION
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "student" && pass === "1234") {
        // Redirect to notebooks
        window.location.href = "notebooks.html";
    } else {
        document.getElementById("loginMsg").innerHTML = "Invalid username or password.";
    }
}

// LOOP EXAMPLE

for (let i = 1; i <= 3; i++) {
    console.log("Notebook " + i);
}

let a = 10;
let b = 5;
let result = a + b; // operator example
console.log("Sum: " + result);