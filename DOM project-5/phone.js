function validatePhoneNumber() {
    var phone = document.getElementById("phone").value.trim();

    if (phone === "") {
        alert("Phone number can't be empty");
        return false;
    } else if (!/^\d{10}$/.test(phone)) {
        alert("Phone number should have exactly 10 digits");
        return false;
    }

    return true;
}

