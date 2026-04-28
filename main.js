const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'ilovejude' && password === 'judebellingham05') {
        window.alert('Welcome ' + username + '!');
    } else {
        window.alert(
            "Incorrect username and/or password\n" +
            "Username: " + username + "\n" +
            "Password: " + password
        );
    }
});
