const myEmojis = ["🏀", "🏋🏾‍♂️", "🙏🏾"];
const emojiContainer = document.getElementById("emoji-container");
const inputField = document.getElementById("input-field");
const addBtn = document.getElementById("add-btn");

for(let i = 0; i < myEmojis.length; i++) {
    const span = document.createElement("span");
    span.textContent = myEmojis[i];
    emojiContainer.append(span)
}

addBtn.addEventListener("click", function() {
    inputField.value; 
})