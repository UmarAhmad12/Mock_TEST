function validateGender() {
    var gender = document.querySelector('input[name="gender"]:checked');

    if (!gender) {
        alert("Please select a gender");
        return false;
    }

    return true;
}
