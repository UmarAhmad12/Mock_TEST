let mainBox = document.getElementsByTagName("main")
let input = document.getElementById("input");
let submit = document.getElementById("submit")
let ulList = document.getElementById("note");
submit.addEventListener("click", () => {
    let text = input.value;
    if (text) {
        let li_items = document.createElement("li");
        li_items.textContent = text;
        ulList.appendChild(li_items);
    }
    document.mainBox.appendChild(ulList)
})