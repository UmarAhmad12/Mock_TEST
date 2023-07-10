const loader = document.getElementById("loader");
const dataList = document.getElementById("data-list");

// Display the skeleton loader
loader.style.display = "block";

// Fetch data from the JSONPlaceholder API
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    // Hide the skeleton loader
    loader.style.display = "none";

    // Display the fetched data
    data.forEach(item => {
      const listItem = document.createElement("li");
      listItem.textContent = item.title;
      dataList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error(error);
    // Hide the skeleton loader and display an error message if fetching fails
    loader.style.display = "none";
    dataList.innerHTML = "<li>Error occurred while fetching data</li>";
  });
