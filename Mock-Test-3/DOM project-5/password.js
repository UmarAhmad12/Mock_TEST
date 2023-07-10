function validatePassword() {
    var password = document.getElementById("password").value.trim();

    if (password === "") {
        alert("Password can't be empty");
        return false;
    } else if (password.length < 8) {
        alert("Password should be at least 8 characters long");
        return false;
    } else if (!validatePasswordStrength(password)) {
        alert("Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character");
        return false;
    }

    return true;
}

function validatePasswordStrength(password) {
    var uppercaseRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var numberRegex = /\d/;
    var specialCharRegex = /[^\w\s]/;

    return uppercaseRegex.test(password) && lowercaseRegex.test(password) && numberRegex.test(password) && specialCharRegex.test(password);
}
