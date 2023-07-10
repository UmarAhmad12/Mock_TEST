// validation for name
function validateName() {
    var name = document.getElementById("name").value.trim();

    if (name === "") {
        alert("Name can't be empty");
        return false;
    } else if (/\d/.test(name)) {
        alert("Name should not contain any numbers");
        return false;
    } else if (/[^\w\s]/.test(name)) {
        alert("Name should not contain any special characters");
        return false;
    }

    return true;
}
