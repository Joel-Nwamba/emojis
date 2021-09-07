const myEmojis = ["🏀", "🏋🏾‍♂️", "🙏🏾"];
const emojiContainer = document.getElementById("emoji-container");
const inputField = document.getElementById("input-field");
const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");
const frontBtn = document.getElementById("front-btn");

function renderEmojis(){
    for(let i = 0; i < myEmojis.length; i++) {
        const span = document.createElement("span");
        span.textContent = myEmojis[i];
        emojiContainer.append(span);
    }
}

renderEmojis();

addBtn.addEventListener("click", function() {
    if(inputField.value) {
        myEmojis.push(inputField.value);
        inputField.value = "";
        console.log(myEmojis);
        emojiContainer.textContent = "";
        renderEmojis()
    }
});

removeBtn.addEventListener("click", function() {
    myEmojis.pop();
    emojiContainer.textContent = "";
    renderEmojis();
});

frontBtn.addEventListener("click", function() {
    if(inputField.value) {
        myEmojis.unshift(inputField.value);
        inputField.value = "";
        console.log(myEmojis);
        emojiContainer.textContent = "";
        renderEmojis()
    }
})