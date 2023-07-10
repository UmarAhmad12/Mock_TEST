let box1 = document.getElementsByClassName("box1")[0];
let box2 = document.getElementsByClassName("box2")[0];

box1.addEventListener("click", () => {
    box1.style.display = "none"
    box2.style.display = "block";
    box2.style.width = "600px";
    box2.style.height = "600px";
})

box2.addEventListener("click", () => {
    box2.style.display = "none"
    box1.style.display = "block";
    box1.style.width = "300px";
    box1.style.height = "300px";
})