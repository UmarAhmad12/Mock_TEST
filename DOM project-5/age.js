function validateAge() {
    var age = document.getElementById("age").value.trim();

    if (age === "") {
        alert("Age can't be empty");
        return false;
    } else if (isNaN(age) || parseInt(age) < 18) {
        alert("Age should be a number and should not be less than 18 years");
        return false;
    }

    return true;
}
