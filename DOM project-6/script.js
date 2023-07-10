// Get the modal element
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("openModalBtn");

// Get the close button element
let closeBtn = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Disable scrolling on the body
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Enable scrolling on the body
}

// Event listener to open the modal
btn.addEventListener("click", openModal);

// Event listener to close the modal when the close button is clicked
closeBtn.addEventListener("click", closeModal);

// Event listener to close the modal when the user clicks outside the modal
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    closeModal();
  }
});

