function validateEmail() {
    var email = document.getElementById("email").value.trim();

    if (email === "") {
        alert("Email can't be empty");
        return false;
    } else if (!validateEmailFormat(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    return true;
}

function validateEmailFormat(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
