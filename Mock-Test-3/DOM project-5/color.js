function validateColor() {
    var color = document.getElementById("color").value.trim();

    if (color === "") {
        alert("Color can't be empty");
        return false;
    }

    return true;
}
