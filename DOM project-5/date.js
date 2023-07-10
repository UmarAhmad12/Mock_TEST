function validateDate() {
    var date = document.getElementById("date").value.trim();

    if (date === "") {
        alert("Date can't be empty");
        return false;
    } else if (!validateDateFormat(date)) {
        alert("Please enter a valid date in the format YYYY-MM-DD");
        return false;
    } else if (!validateDateRange(date)) {
        alert("Date should not be more than 5 years old from the current date");
        return false;
    }

    return true;
}

function validateDateFormat(date) {
    var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(date);
}

function validateDateRange(date) {
    var inputDate = new Date(date);
    var currentDate = new Date();
    var maxAge = new Date(currentDate.getFullYear() - 5, currentDate.getMonth(), currentDate.getDate());

    return inputDate <= currentDate && inputDate >= maxAge;
}
